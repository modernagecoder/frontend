param(
    [string]$ContentFile = 'content.json',
    [string]$CaptionFile = 'CAPTIONS-AND-PUBLISHING.md',
    [string]$ContactSheetFile = 'CONTACT-SHEET-30-COVERS.png'
)

Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$contentPath = Join-Path $root $ContentFile
$logoPath = Resolve-Path (Join-Path $root '..\..\public\images\logo.png')
$posts = Get-Content -Raw $contentPath | ConvertFrom-Json

function Color([string]$hex) { [System.Drawing.ColorTranslator]::FromHtml($hex) }
function Brush([string]$hex) { [System.Drawing.SolidBrush]::new((Color $hex)) }
function Font([float]$size, [System.Drawing.FontStyle]$style = [System.Drawing.FontStyle]::Regular, [string]$family = 'Bahnschrift') {
    [System.Drawing.Font]::new($family, $size, $style, [System.Drawing.GraphicsUnit]::Point)
}

function RoundedPath([float]$x, [float]$y, [float]$w, [float]$h, [float]$r) {
    $p = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $d = $r * 2
    $p.AddArc($x, $y, $d, $d, 180, 90)
    $p.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
    $p.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
    $p.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
    $p.CloseFigure()
    $p
}

function FillRound($g, [string]$hex, [float]$x, [float]$y, [float]$w, [float]$h, [float]$r) {
    $b = Brush $hex
    $p = RoundedPath $x $y $w $h $r
    $g.FillPath($b, $p)
    $p.Dispose(); $b.Dispose()
}

function Text($g, [string]$value, $font, [string]$hex, [float]$x, [float]$y, [float]$w, [float]$h, [string]$align = 'Near') {
    $b = Brush $hex
    $f = [System.Drawing.StringFormat]::new()
    $f.Trimming = [System.Drawing.StringTrimming]::EllipsisCharacter
    $f.FormatFlags = [System.Drawing.StringFormatFlags]::NoWrap
    if ($align -eq 'Center') { $f.Alignment = [System.Drawing.StringAlignment]::Center }
    elseif ($align -eq 'Far') { $f.Alignment = [System.Drawing.StringAlignment]::Far }
    else { $f.Alignment = [System.Drawing.StringAlignment]::Near }
    $rect = [System.Drawing.RectangleF]::new($x, $y, $w, $h)
    $g.DrawString($value, $font, $b, $rect, $f)
    $f.Dispose(); $b.Dispose()
}

function WrapText($g, [string]$value, $font, [string]$hex, [float]$x, [float]$y, [float]$w, [float]$h, [string]$align = 'Near') {
    $b = Brush $hex
    $f = [System.Drawing.StringFormat]::new()
    $f.Trimming = [System.Drawing.StringTrimming]::EllipsisWord
    if ($align -eq 'Center') { $f.Alignment = [System.Drawing.StringAlignment]::Center }
    elseif ($align -eq 'Far') { $f.Alignment = [System.Drawing.StringAlignment]::Far }
    else { $f.Alignment = [System.Drawing.StringAlignment]::Near }
    $rect = [System.Drawing.RectangleF]::new($x, $y, $w, $h)
    $g.DrawString($value, $font, $b, $rect, $f)
    $f.Dispose(); $b.Dispose()
}

function FitFont($g, [string]$value, [float]$maxSize, [float]$minSize, [float]$maxWidth, [System.Drawing.FontStyle]$style = [System.Drawing.FontStyle]::Bold, [string]$family = 'Bahnschrift') {
    $size = $maxSize
    while ($size -gt $minSize) {
        $candidate = Font $size $style $family
        if ($g.MeasureString($value, $candidate).Width -le $maxWidth) { return $candidate }
        $candidate.Dispose()
        $size -= 2
    }
    Font $minSize $style $family
}

function Tint([string]$accent) {
    switch ($accent.ToUpperInvariant()) {
        '#F04B2F' { '#FCE3DC' }
        '#0F82F5' { '#E2EFFD' }
        '#154C3C' { '#DDEDE4' }
        '#F5B22D' { '#FFF0CB' }
        '#6B4EFF' { '#ECE7FF' }
        default { '#E8ECE9' }
    }
}

function OnAccent([string]$accent) {
    if ($accent.ToUpperInvariant() -eq '#F5B22D') { '#111817' } else { '#FFFFFF' }
}

function NewCanvas([bool]$dark) {
    $bmp = [System.Drawing.Bitmap]::new(1080, 1350)
    $bmp.SetResolution(96, 96)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    if ($dark) { $g.Clear((Color '#111817')) } else { $g.Clear((Color '#F7F3EA')) }
    @($bmp, $g)
}

function DrawHeader($g, $logo, $post, [bool]$dark) {
    $g.DrawImage($logo, 72, 62, 72, 72)
    $brandColor = if ($dark) { '#F7F3EA' } else { '#111817' }
    $brand = Font 24 ([System.Drawing.FontStyle]::Bold)
    Text $g 'MODERN AGE' $brand $brandColor 164 62 420 40
    Text $g 'CODERS' $brand $brandColor 164 96 420 40
    FillRound $g $post.accent 690 73 318 52 26
    $badgeValue = "{0}  {1:D2}" -f $post.category, [int]$post.number
    $badge = FitFont $g $badgeValue 15 11 278 ([System.Drawing.FontStyle]::Bold)
    Text $g $badgeValue $badge (OnAccent $post.accent) 710 85 278 26 'Center'
    $brand.Dispose(); $badge.Dispose()
}

function DrawTitle($g, $slide, $post, [bool]$dark) {
    $mainColor = if ($dark) { '#F7F3EA' } else { '#111817' }
    $subColor = if ($dark) { '#C6CCC8' } else { '#59625D' }
    $title = FitFont $g ([string]$slide.title) 72 42 880 ([System.Drawing.FontStyle]::Bold)
    $accent = FitFont $g ([string]$slide.accentTitle) 78 38 880 ([System.Drawing.FontStyle]::Bold)
    Text $g $slide.title $title $mainColor 72 186 936 98
    Text $g $slide.accentTitle $accent $post.accent 72 282 936 110
    $subtitle = Font 21 ([System.Drawing.FontStyle]::Regular)
    Text $g $slide.subtitle $subtitle $subColor 76 414 920 44
    $title.Dispose(); $accent.Dispose(); $subtitle.Dispose()
}

function DrawFooter($g, $post, [int]$page, [int]$total, [bool]$dark) {
    $color = if ($dark) { '#C6CCC8' } else { '#5F6863' }
    $seriesColor = if ($dark) { $post.accent } else { '#154C3C' }
    $small = Font 14 ([System.Drawing.FontStyle]::Bold)
    Text $g $post.series $small $seriesColor 72 1284 500 26
    Text $g ("{0} / {1}" -f $page, $total) $small $color 860 1284 148 26 'Far'
    $small.Dispose()
}

function DrawPrompt($g, $post, [string]$prompt, [float]$y, [bool]$dark) {
    $fill = if ($dark) { '#F7F3EA' } else { '#111817' }
    $textColor = if ($dark) { '#111817' } else { '#F7F3EA' }
    FillRound $g $fill 72 $y 936 92 16
    $font = FitFont $g $prompt 23 15 860 ([System.Drawing.FontStyle]::Bold)
    Text $g $prompt $font $textColor 108 ($y + 27) 864 40 'Center'
    $font.Dispose()
}

function DrawCodeCard($g, $lines, [float]$y, [float]$height) {
    FillRound $g '#111817' 72 $y 936 $height 24
    $label = Font 14 ([System.Drawing.FontStyle]::Bold)
    Text $g 'code' $label '#99A49E' 112 ($y + 28) 200 28
    $pen = [System.Drawing.Pen]::new((Color '#303A36'), 2)
    $g.DrawLine($pen, 112, $y + 72, 968, $y + 72)
    $pen.Dispose()
    $maxLen = 1
    foreach ($line in $lines) { if ([string]$line.Length -gt $maxLen) { $maxLen = [string]$line.Length } }
    $codeSize = if ($maxLen -gt 28) { 22 } elseif ($maxLen -gt 22) { 25 } else { 29 }
    $mono = Font $codeSize ([System.Drawing.FontStyle]::Regular) 'Consolas'
    $number = Font 15 ([System.Drawing.FontStyle]::Regular) 'Consolas'
    $lineHeight = [Math]::Min(66, (($height - 105) / [Math]::Max(1, $lines.Count)))
    for ($i = 0; $i -lt $lines.Count; $i++) {
        $lineY = $y + 92 + ($i * $lineHeight)
        Text $g ("{0:D2}" -f ($i + 1)) $number '#65706A' 112 $lineY 54 38
        Text $g ([string]$lines[$i]) $mono '#F7F3EA' 190 ($lineY - 8) 760 52
    }
    $label.Dispose(); $mono.Dispose(); $number.Dispose()
}

function DrawChallenge($g, $slide, $post, [bool]$dark) {
    DrawCodeCard $g $slide.code 500 405
    $small = Font 16 ([System.Drawing.FontStyle]::Bold)
    $answer = Font 39 ([System.Drawing.FontStyle]::Bold)
    $bodyColor = if ($dark) { '#F7F3EA' } else { '#111817' }
    Text $g 'YOUR ANSWER' $small $post.accent 76 962 250 30
    Text $g 'LINE ____' $answer $bodyColor 72 998 420 68
    FillRound $g $post.accent 576 970 432 96 16
    $button = FitFont $g $slide.prompt 23 15 382 ([System.Drawing.FontStyle]::Bold)
    Text $g $slide.prompt $button (OnAccent $post.accent) 594 998 396 40 'Center'
    $small.Dispose(); $answer.Dispose(); $button.Dispose()
}

function DrawQuiz($g, $slide, $post, [bool]$dark) {
    DrawCodeCard $g $slide.code 492 360
    $itemFill = if ($dark) { '#25302C' } else { '#FFFFFF' }
    $itemText = if ($dark) { '#F7F3EA' } else { '#111817' }
    $optionFont = Font 21 ([System.Drawing.FontStyle]::Bold)
    for ($i = 0; $i -lt $slide.options.Count; $i++) {
        $x = 72 + ($i * 312)
        FillRound $g $itemFill $x 892 288 104 16
        Text $g $slide.options[$i] $optionFont $itemText ($x + 14) 925 260 40 'Center'
    }
    $optionFont.Dispose()
    DrawPrompt $g $post $slide.prompt 1050 $dark
}

function DrawAnswer($g, $slide, $post, [bool]$dark) {
    $tint = Tint $post.accent
    $fills = @('#FCE3DC', '#DDEDE4')
    $tagColors = @('#F04B2F', '#154C3C')
    $code = Font 28 ([System.Drawing.FontStyle]::Regular) 'Consolas'
    $tag = Font 14 ([System.Drawing.FontStyle]::Bold)
    for ($i = 0; $i -lt 2; $i++) {
        $y = 500 + ($i * 208)
        FillRound $g $fills[$i] 72 $y 936 176 22
        FillRound $g $tagColors[$i] 104 ($y + 28) 170 42 21
        Text $g $slide.items[$i].label $tag '#FFFFFF' 114 ($y + 38) 150 25 'Center'
        $fit = FitFont $g ([string]$slide.items[$i].text) 28 20 840 ([System.Drawing.FontStyle]::Regular) 'Consolas'
        Text $g $slide.items[$i].text $fit '#111817' 108 ($y + 92) 840 50
        $fit.Dispose()
    }
    $noteColor = if ($dark) { '#F7F3EA' } else { '#111817' }
    $note = FitFont $g ([string]$slide.note) 24 17 880 ([System.Drawing.FontStyle]::Bold)
    Text $g $slide.note $note $noteColor 96 946 888 46 'Center'
    DrawPrompt $g $post $slide.prompt 1060 $dark
    $code.Dispose(); $tag.Dispose(); $note.Dispose()
}

function DrawReveal($g, $slide, $post, [bool]$dark) {
    $tint = if ($dark) { '#25302C' } else { Tint $post.accent }
    FillRound $g $tint 72 500 936 226 24
    $focalColor = if ($dark) { '#F7F3EA' } else { '#111817' }
    $focal = FitFont $g ([string]$slide.focal) 34 18 850 ([System.Drawing.FontStyle]::Bold)
    Text $g $slide.focal $focal $focalColor 112 576 856 70 'Center'
    $itemFill = if ($dark) { '#25302C' } else { '#FFFFFF' }
    $label = Font 17 ([System.Drawing.FontStyle]::Bold)
    $body = Font 19 ([System.Drawing.FontStyle]::Regular)
    for ($i = 0; $i -lt 2; $i++) {
        $x = 72 + ($i * 474)
        FillRound $g $itemFill $x 770 444 190 20
        Text $g $slide.items[$i].label $label $post.accent ($x + 30) 806 384 32
        WrapText $g $slide.items[$i].text $body $focalColor ($x + 30) 850 384 74
    }
    DrawPrompt $g $post $slide.prompt 1050 $dark
    $focal.Dispose(); $label.Dispose(); $body.Dispose()
}

function DrawHero($g, $slide, $post, [bool]$dark) {
    $panel = if ($dark) { '#25302C' } else { Tint $post.accent }
    FillRound $g $panel 72 510 936 310 28
    $focalColor = if ($dark) { '#F7F3EA' } else { '#111817' }
    $focal = FitFont $g ([string]$slide.focal) 39 18 850 ([System.Drawing.FontStyle]::Bold)
    Text $g $slide.focal $focal $focalColor 110 620 860 82 'Center'
    $rule = [System.Drawing.Pen]::new((Color $post.accent), 8)
    $g.DrawLine($rule, 256, 754, 824, 754)
    $rule.Dispose()
    DrawPrompt $g $post $slide.prompt 930 $dark
}

function DrawFlow($g, $slide, $post, [bool]$dark) {
    $card = if ($dark) { '#25302C' } else { '#FFFFFF' }
    $main = if ($dark) { '#F7F3EA' } else { '#111817' }
    $labelFont = Font 18 ([System.Drawing.FontStyle]::Bold)
    $bodyFont = Font 19 ([System.Drawing.FontStyle]::Regular)
    $linePen = [System.Drawing.Pen]::new((Color $post.accent), 6)
    $g.DrawLine($linePen, 112, 560, 112, 985)
    for ($i = 0; $i -lt 3; $i++) {
        $y = 500 + ($i * 176)
        $dot = Brush $post.accent
        $g.FillEllipse($dot, 94, $y + 58, 36, 36)
        $dot.Dispose()
        FillRound $g $card 154 $y 854 142 18
        Text $g $slide.items[$i].label $labelFont $post.accent 186 ($y + 26) 760 34
        Text $g $slide.items[$i].text $bodyFont $main 186 ($y + 72) 760 38
    }
    $linePen.Dispose(); $labelFont.Dispose(); $bodyFont.Dispose()
    DrawPrompt $g $post $slide.prompt 1070 $dark
}

function DrawChecklist($g, $slide, $post, [bool]$dark) {
    $card = if ($dark) { '#25302C' } else { '#FFFFFF' }
    $main = if ($dark) { '#F7F3EA' } else { '#111817' }
    $labelFont = Font 17 ([System.Drawing.FontStyle]::Bold)
    $bodyFont = Font 18 ([System.Drawing.FontStyle]::Regular)
    $count = $slide.items.Count
    $rowHeight = if ($count -gt 3) { 122 } else { 148 }
    for ($i = 0; $i -lt $count; $i++) {
        $y = 490 + ($i * ($rowHeight + 18))
        FillRound $g $card 72 $y 936 $rowHeight 18
        FillRound $g $post.accent 96 ($y + 24) 58 58 12
        $num = Font 18 ([System.Drawing.FontStyle]::Bold)
        Text $g ("{0:D2}" -f ($i + 1)) $num (OnAccent $post.accent) 99 ($y + 39) 52 30 'Center'
        Text $g $slide.items[$i].label $labelFont $post.accent 184 ($y + 22) 730 34
        Text $g $slide.items[$i].text $bodyFont $main 184 ($y + 62) 760 38
        $num.Dispose()
    }
    $promptY = if ($count -gt 3) { 1090 } else { 1050 }
    DrawPrompt $g $post $slide.prompt $promptY $dark
    $labelFont.Dispose(); $bodyFont.Dispose()
}

function DrawCompare($g, $slide, $post, [bool]$dark) {
    $fills = if ($dark) { @('#25302C', '#25302C') } else { @('#FFFFFF', (Tint $post.accent)) }
    $main = if ($dark) { '#F7F3EA' } else { '#111817' }
    $label = Font 18 ([System.Drawing.FontStyle]::Bold)
    $body = Font 22 ([System.Drawing.FontStyle]::Regular)
    for ($i = 0; $i -lt 2; $i++) {
        $y = 510 + ($i * 245)
        FillRound $g $fills[$i] 72 $y 936 210 22
        FillRound $g $post.accent 104 ($y + 30) 178 44 22
        Text $g $slide.items[$i].label $label (OnAccent $post.accent) 116 ($y + 40) 154 28 'Center'
        WrapText $g $slide.items[$i].text $body $main 108 ($y + 104) 840 70
    }
    DrawPrompt $g $post $slide.prompt 1050 $dark
    $label.Dispose(); $body.Dispose()
}

function DrawPoll($g, $slide, $post, [bool]$dark) {
    $main = if ($dark) { '#F7F3EA' } else { '#111817' }
    $card = if ($dark) { '#25302C' } else { '#FFFFFF' }
    $label = Font 54 ([System.Drawing.FontStyle]::Bold)
    $body = Font 24 ([System.Drawing.FontStyle]::Bold)
    for ($i = 0; $i -lt 2; $i++) {
        $x = 72 + ($i * 474)
        FillRound $g $card $x 520 444 390 24
        FillRound $g $post.accent ($x + 34) 558 92 92 46
        Text $g $slide.items[$i].label $label (OnAccent $post.accent) ($x + 40) 566 80 72 'Center'
        WrapText $g $slide.items[$i].text $body $main ($x + 36) 700 372 120 'Center'
    }
    DrawPrompt $g $post $slide.prompt 1020 $dark
    $label.Dispose(); $body.Dispose()
}

function DrawStatement($g, $slide, $post, [bool]$dark) {
    $panel = if ($dark) { '#25302C' } else { Tint $post.accent }
    $main = if ($dark) { '#F7F3EA' } else { '#111817' }
    FillRound $g $panel 72 500 936 240 24
    $focal = FitFont $g ([string]$slide.focal) 42 18 850 ([System.Drawing.FontStyle]::Bold) $(if($slide.focal -match '[=<>/\\]'){'Consolas'}else{'Bahnschrift'})
    Text $g $slide.focal $focal $main 110 580 860 80 'Center'
    $card = if ($dark) { '#25302C' } else { '#FFFFFF' }
    $label = Font 17 ([System.Drawing.FontStyle]::Bold)
    $body = Font 19 ([System.Drawing.FontStyle]::Regular)
    for ($i = 0; $i -lt 2; $i++) {
        $x = 72 + ($i * 474)
        FillRound $g $card $x 790 444 180 18
        Text $g $slide.items[$i].label $label $post.accent ($x + 30) 824 380 32
        WrapText $g $slide.items[$i].text $body $main ($x + 30) 866 382 68
    }
    DrawPrompt $g $post $slide.prompt 1040 $dark
    $focal.Dispose(); $label.Dispose(); $body.Dispose()
}

function DrawProject($g, $slide, $post, [bool]$dark) {
    $card = if ($dark) { '#25302C' } else { '#FFFFFF' }
    $main = if ($dark) { '#F7F3EA' } else { '#111817' }
    $label = Font 17 ([System.Drawing.FontStyle]::Bold)
    $body = Font 19 ([System.Drawing.FontStyle]::Regular)
    for ($i = 0; $i -lt 3; $i++) {
        $x = 72 + ($i * 312)
        FillRound $g $card $x 510 288 310 20
        FillRound $g $post.accent ($x + 28) 544 64 64 16
        $num = Font 20 ([System.Drawing.FontStyle]::Bold)
        Text $g ("{0:D2}" -f ($i + 1)) $num (OnAccent $post.accent) ($x + 31) 561 58 32 'Center'
        Text $g $slide.items[$i].label $label $post.accent ($x + 28) 638 232 34
        WrapText $g $slide.items[$i].text $body $main ($x + 28) 686 232 84
        $num.Dispose()
    }
    $focalFill = if ($dark) { '#F7F3EA' } else { Tint $post.accent }
    FillRound $g $focalFill 72 860 936 130 18
    $focalColor = if ($dark) { '#111817' } else { '#111817' }
    $focal = FitFont $g ([string]$slide.focal) 31 18 850 ([System.Drawing.FontStyle]::Bold)
    Text $g $slide.focal $focal $focalColor 112 898 856 54 'Center'
    DrawPrompt $g $post $slide.prompt 1050 $dark
    $label.Dispose(); $body.Dispose(); $focal.Dispose()
}

function DrawCode($g, $slide, $post, [bool]$dark) {
    DrawCodeCard $g $slide.code 492 350
    $card = if ($dark) { '#25302C' } else { '#FFFFFF' }
    $main = if ($dark) { '#F7F3EA' } else { '#111817' }
    $label = Font 15 ([System.Drawing.FontStyle]::Bold)
    $body = Font 16 ([System.Drawing.FontStyle]::Regular)
    for ($i = 0; $i -lt 3; $i++) {
        $x = 72 + ($i * 312)
        FillRound $g $card $x 880 288 130 16
        Text $g $slide.items[$i].label $label $post.accent ($x + 20) 904 248 28
        WrapText $g $slide.items[$i].text $body $main ($x + 20) 940 248 46
    }
    DrawPrompt $g $post $slide.prompt 1050 $dark
    $label.Dispose(); $body.Dispose()
}

function DrawGrid($g, $slide, $post, [bool]$dark) {
    $card = if ($dark) { '#25302C' } else { '#FFFFFF' }
    $main = if ($dark) { '#F7F3EA' } else { '#111817' }
    $label = Font 23 ([System.Drawing.FontStyle]::Bold)
    $body = Font 18 ([System.Drawing.FontStyle]::Regular)
    for ($i = 0; $i -lt 4; $i++) {
        $col = $i % 2
        $row = [Math]::Floor($i / 2)
        $x = 72 + ($col * 474)
        $y = 500 + ($row * 244)
        FillRound $g $card $x $y 444 214 20
        Text $g $slide.items[$i].label $label $post.accent ($x + 30) ($y + 38) 370 42
        WrapText $g $slide.items[$i].text $body $main ($x + 30) ($y + 96) 370 74
    }
    DrawPrompt $g $post $slide.prompt 1030 $dark
    $label.Dispose(); $body.Dispose()
}

function DrawSlide($post, $slide, [int]$page, [int]$total, $logo, [string]$path) {
    $dark = ([int]$post.number -in @(7, 11, 15, 20, 23, 30, 34, 39, 44, 51, 53, 55, 60))
    $canvas = NewCanvas $dark
    $bmp = $canvas[0]; $g = $canvas[1]
    DrawHeader $g $logo $post $dark
    DrawTitle $g $slide $post $dark
    switch ([string]$slide.template) {
        'challenge' { DrawChallenge $g $slide $post $dark }
        'quiz' { DrawQuiz $g $slide $post $dark }
        'answer' { DrawAnswer $g $slide $post $dark }
        'reveal' { DrawReveal $g $slide $post $dark }
        'hero' { DrawHero $g $slide $post $dark }
        'flow' { DrawFlow $g $slide $post $dark }
        'checklist' { DrawChecklist $g $slide $post $dark }
        'compare' { DrawCompare $g $slide $post $dark }
        'poll' { DrawPoll $g $slide $post $dark }
        'statement' { DrawStatement $g $slide $post $dark }
        'project' { DrawProject $g $slide $post $dark }
        'code' { DrawCode $g $slide $post $dark }
        'grid' { DrawGrid $g $slide $post $dark }
        default { throw "Unknown template: $($slide.template)" }
    }
    DrawFooter $g $post $page $total $dark
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose(); $bmp.Dispose()
}

$logo = [System.Drawing.Image]::FromFile($logoPath)
$captionLines = [System.Collections.Generic.List[string]]::new()
$firstNumber = [int]$posts[0].number
$lastNumber = [int]$posts[$posts.Count - 1].number
$captionLines.Add(("# Modern Age Coders: Posts {0}-{1}" -f $firstNumber, $lastNumber))
$captionLines.Add('')
$captionLines.Add('All assets are manually rendered at 1080 x 1350 pixels. Upload carousel slides in numerical order.')
$captionLines.Add('')
$coverPaths = [System.Collections.Generic.List[string]]::new()
$totalSlides = 0

foreach ($post in $posts) {
    $folderName = "{0:D2}-{1}" -f [int]$post.number, $post.slug
    $postDir = Join-Path $root $folderName
    New-Item -ItemType Directory -Force -Path $postDir | Out-Null
    $slideCount = $post.slides.Count
    for ($i = 0; $i -lt $slideCount; $i++) {
        $slidePath = Join-Path $postDir ("slide-{0:D2}.png" -f ($i + 1))
        DrawSlide $post $post.slides[$i] ($i + 1) $slideCount $logo $slidePath
        if ($i -eq 0) { $coverPaths.Add($slidePath) }
        $totalSlides++
    }
    $captionLines.Add(("## {0:D2}. {1}" -f [int]$post.number, $post.slides[0].accentTitle))
    $captionLines.Add('')
    $captionLines.Add(("Format: {0} slide{1}" -f $slideCount, $(if($slideCount -eq 1){''}else{'s'})))
    $captionLines.Add('')
    $captionLines.Add([string]$post.caption)
    $captionLines.Add('')
    $captionLines.Add([string]$post.hashtags)
    $captionLines.Add('')
    $captionLines.Add(("Engagement prompt: {0}" -f $post.slides[0].prompt))
    $captionLines.Add('')
}

[System.IO.File]::WriteAllLines((Join-Path $root $CaptionFile), $captionLines, [System.Text.UTF8Encoding]::new($false))

# Contact sheet containing the first slide of every post.
$sheetRows = [Math]::Ceiling($coverPaths.Count / 5)
$sheetHeight = [int](24 + ($sheetRows * 256))
$sheet = [System.Drawing.Bitmap]::new(1080, $sheetHeight)
$sheet.SetResolution(96, 96)
$sg = [System.Drawing.Graphics]::FromImage($sheet)
$sg.Clear((Color '#D8D4CA'))
$sg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$sg.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$numFont = Font 12 ([System.Drawing.FontStyle]::Bold)
for ($i = 0; $i -lt $coverPaths.Count; $i++) {
    $col = $i % 5
    $row = [Math]::Floor($i / 5)
    $x = 12 + ($col * 214)
    $y = 12 + ($row * 256)
    $img = [System.Drawing.Image]::FromFile($coverPaths[$i])
    $sg.DrawImage($img, $x, $y, 196, 245)
    $img.Dispose()
    $badge = Brush '#111817'
    $sg.FillEllipse($badge, $x + 8, $y + 8, 28, 28)
    $badge.Dispose()
    Text $sg ("{0:D2}" -f [int]$posts[$i].number) $numFont '#FFFFFF' ($x + 8) ($y + 13) 28 18 'Center'
}
$sheet.Save((Join-Path $root $ContactSheetFile), [System.Drawing.Imaging.ImageFormat]::Png)
$numFont.Dispose(); $sg.Dispose(); $sheet.Dispose(); $logo.Dispose()

Write-Output ("Rendered {0} posts and {1} total slides." -f $posts.Count, $totalSlides)
