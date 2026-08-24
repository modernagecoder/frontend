Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'
$outputDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$logoPath = Resolve-Path (Join-Path $outputDir '..\..\public\images\logo.png')

function Get-Color([string]$hex) {
    return [System.Drawing.ColorTranslator]::FromHtml($hex)
}

function New-Brush([string]$hex) {
    return [System.Drawing.SolidBrush]::new((Get-Color $hex))
}

function New-Font([float]$size, [System.Drawing.FontStyle]$style = [System.Drawing.FontStyle]::Regular, [string]$family = 'Bahnschrift') {
    return [System.Drawing.Font]::new($family, $size, $style, [System.Drawing.GraphicsUnit]::Point)
}

function New-RoundedPath([float]$x, [float]$y, [float]$w, [float]$h, [float]$radius) {
    $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $diameter = $radius * 2
    $path.AddArc($x, $y, $diameter, $diameter, 180, 90)
    $path.AddArc($x + $w - $diameter, $y, $diameter, $diameter, 270, 90)
    $path.AddArc($x + $w - $diameter, $y + $h - $diameter, $diameter, $diameter, 0, 90)
    $path.AddArc($x, $y + $h - $diameter, $diameter, $diameter, 90, 90)
    $path.CloseFigure()
    return $path
}

function Fill-RoundedRect($g, [string]$hex, [float]$x, [float]$y, [float]$w, [float]$h, [float]$radius) {
    $brush = New-Brush $hex
    $path = New-RoundedPath $x $y $w $h $radius
    $g.FillPath($brush, $path)
    $path.Dispose()
    $brush.Dispose()
}

function Draw-Text($g, [string]$text, $font, [string]$hex, [float]$x, [float]$y, [float]$w, [float]$h, [string]$align = 'Near') {
    $brush = New-Brush $hex
    $format = [System.Drawing.StringFormat]::new()
    $format.Trimming = [System.Drawing.StringTrimming]::None
    $format.FormatFlags = [System.Drawing.StringFormatFlags]::NoWrap
    if ($align -eq 'Center') { $format.Alignment = [System.Drawing.StringAlignment]::Center }
    elseif ($align -eq 'Far') { $format.Alignment = [System.Drawing.StringAlignment]::Far }
    else { $format.Alignment = [System.Drawing.StringAlignment]::Near }
    $format.LineAlignment = [System.Drawing.StringAlignment]::Near
    $rect = [System.Drawing.RectangleF]::new($x, $y, $w, $h)
    $g.DrawString($text, $font, $brush, $rect, $format)
    $format.Dispose()
    $brush.Dispose()
}

function New-Canvas {
    $bitmap = [System.Drawing.Bitmap]::new(1080, 1350)
    $bitmap.SetResolution(96, 96)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $graphics.Clear((Get-Color '#F7F3EA'))
    return @($bitmap, $graphics)
}

function Draw-Header($g, $logo, [string]$pillText) {
    $g.DrawImage($logo, 72, 64, 72, 72)
    $brandFont = New-Font 25 ([System.Drawing.FontStyle]::Bold)
    Draw-Text $g 'MODERN AGE' $brandFont '#111817' 164 64 420 42
    Draw-Text $g 'CODERS' $brandFont '#111817' 164 99 420 42
    Fill-RoundedRect $g '#0F82F5' 742 75 266 50 25
    $pillFont = New-Font 16 ([System.Drawing.FontStyle]::Bold)
    Draw-Text $g $pillText $pillFont '#FFFFFF' 760 85 230 30 'Center'
    $brandFont.Dispose()
    $pillFont.Dispose()
}

function Draw-Footer($g, [string]$page) {
    $small = New-Font 15 ([System.Drawing.FontStyle]::Bold)
    Draw-Text $g 'DEBUG DETECTIVE' $small '#154C3C' 72 1284 320 28
    Draw-Text $g $page $small '#6C746F' 880 1284 128 28 'Far'
    $small.Dispose()
}

$logo = [System.Drawing.Image]::FromFile($logoPath)

# Slide 1
$result = New-Canvas
$bitmap = $result[0]
$g = $result[1]
Draw-Header $g $logo 'PYTHON CHALLENGE  01'

$headline = New-Font 79 ([System.Drawing.FontStyle]::Bold)
$headlineAccent = New-Font 91 ([System.Drawing.FontStyle]::Bold)
$body = New-Font 24 ([System.Drawing.FontStyle]::Regular)
Draw-Text $g 'CAN YOU FIX' $headline '#111817' 72 190 936 120
Draw-Text $g 'THIS CODE?' $headlineAccent '#F04B2F' 72 292 936 135
Draw-Text $g 'One tiny symbol is stopping the program.' $body '#555E59' 76 435 920 48

Fill-RoundedRect $g '#111817' 72 520 936 392 26
$cardLabel = New-Font 16 ([System.Drawing.FontStyle]::Bold)
$mono = New-Font 31 ([System.Drawing.FontStyle]::Regular) 'Consolas'
$lineNo = New-Font 19 ([System.Drawing.FontStyle]::Regular) 'Consolas'
Draw-Text $g 'challenge.py' $cardLabel '#A6B0AA' 116 554 260 30
$pen = [System.Drawing.Pen]::new((Get-Color '#2D3734'), 2)
$g.DrawLine($pen, 112, 598, 968, 598)
$pen.Dispose()
Draw-Text $g '01' $lineNo '#66706B' 116 636 56 42
Draw-Text $g '02' $lineNo '#66706B' 116 714 56 42
Draw-Text $g '03' $lineNo '#66706B' 116 792 56 42
Draw-Text $g 'score = 10' $mono '#F7F3EA' 190 625 720 56
Draw-Text $g 'if score = 10:' $mono '#F7F3EA' 190 703 720 56
Draw-Text $g '    print("LEVEL UP")' $mono '#F7F3EA' 190 781 750 56

$label = New-Font 17 ([System.Drawing.FontStyle]::Bold)
$answer = New-Font 40 ([System.Drawing.FontStyle]::Bold)
Draw-Text $g 'YOUR ANSWER' $label '#154C3C' 76 974 250 32
Draw-Text $g 'LINE ____' $answer '#111817' 72 1010 420 70
Fill-RoundedRect $g '#F04B2F' 580 984 428 100 16
$button = New-Font 25 ([System.Drawing.FontStyle]::Bold)
Draw-Text $g 'COMMENT YOUR FIX' $button '#FFFFFF' 604 1016 380 44 'Center'
Draw-Text $g 'Save it. Solve it. Send it to a coding friend.' $body '#555E59' 72 1132 936 48
Draw-Footer $g '1 / 2'

$bitmap.Save((Join-Path $outputDir '01-python-challenge.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bitmap.Dispose()
$headline.Dispose(); $headlineAccent.Dispose(); $body.Dispose(); $cardLabel.Dispose(); $mono.Dispose(); $lineNo.Dispose(); $label.Dispose(); $answer.Dispose(); $button.Dispose()

# Slide 2
$result = New-Canvas
$bitmap = $result[0]
$g = $result[1]
Draw-Header $g $logo 'ANSWER  02'

$answerHeadline = New-Font 68 ([System.Drawing.FontStyle]::Bold)
$answerAccent = New-Font 77 ([System.Drawing.FontStyle]::Bold)
$answerBody = New-Font 23 ([System.Drawing.FontStyle]::Regular)
Draw-Text $g 'ONE SYMBOL.' $answerHeadline '#111817' 72 194 936 104
Draw-Text $g 'BIG DIFFERENCE.' $answerAccent '#0F82F5' 72 286 936 116
Draw-Text $g 'Line 2 needs a comparison operator.' $answerBody '#555E59' 76 416 900 42

Fill-RoundedRect $g '#FCE3DC' 72 500 936 180 22
Fill-RoundedRect $g '#F04B2F' 104 528 132 42 21
$tag = New-Font 15 ([System.Drawing.FontStyle]::Bold)
$code = New-Font 33 ([System.Drawing.FontStyle]::Regular) 'Consolas'
Draw-Text $g 'WRONG' $tag '#FFFFFF' 112 538 116 26 'Center'
Draw-Text $g 'if score = 10:' $code '#111817' 108 588 820 62

Fill-RoundedRect $g '#DDEDE4' 72 710 936 180 22
Fill-RoundedRect $g '#154C3C' 104 738 148 42 21
Draw-Text $g 'CORRECT' $tag '#FFFFFF' 112 748 132 26 'Center'
Draw-Text $g 'if score == 10:' $code '#111817' 108 798 820 62

$symbol = New-Font 46 ([System.Drawing.FontStyle]::Bold) 'Consolas'
$explainHead = New-Font 21 ([System.Drawing.FontStyle]::Bold)
$explainBody = New-Font 19 ([System.Drawing.FontStyle]::Regular)
Draw-Text $g '=' $symbol '#F04B2F' 82 946 100 70
Draw-Text $g 'ASSIGN' $explainHead '#111817' 170 944 250 38
Draw-Text $g 'Put a value into a variable.' $explainBody '#555E59' 170 982 330 38
Draw-Text $g '==' $symbol '#154C3C' 558 946 120 70
Draw-Text $g 'COMPARE' $explainHead '#111817' 680 944 270 38
Draw-Text $g 'Check whether values match.' $explainBody '#555E59' 680 982 320 38

Fill-RoundedRect $g '#111817' 72 1090 936 112 18
$closing = New-Font 25 ([System.Drawing.FontStyle]::Bold)
Draw-Text $g "DON'T JUST COPY CODE. UNDERSTAND IT." $closing '#F7F3EA' 104 1124 872 48 'Center'
Draw-Footer $g '2 / 2'

$bitmap.Save((Join-Path $outputDir '02-python-answer.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bitmap.Dispose()
$answerHeadline.Dispose(); $answerAccent.Dispose(); $answerBody.Dispose(); $tag.Dispose(); $code.Dispose(); $symbol.Dispose(); $explainHead.Dispose(); $explainBody.Dispose(); $closing.Dispose()

$logo.Dispose()
Write-Output 'Rendered 01-python-challenge.png and 02-python-answer.png at 1080x1350.'
