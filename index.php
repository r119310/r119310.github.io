<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/index.css">
    <title>Portfolio | Makoto Otsuka</title>
</head>

<body>
    <main>
    <?php
        function getDeviceType() {
            $userAgent = $_SERVER['HTTP_USER_AGENT'];
            $deviceTypes = array(
                'mobile' => array('Android', 'iPhone', 'iPad', 'Windows Phone', 'BlackBerry', 'Nokia'),
                'tablet' => array('iPad', 'Android'),
                'desktop' => array('Windows', 'Macintosh', 'Linux')
            );
        
            foreach ($deviceTypes as $deviceType => $devices) {
                foreach ($devices as $device) {
                    if (strpos($userAgent, $device) !== false) {
                        return $deviceType;
                    }
                }
            }
        
            return 'unknown';
        }

        $language = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

        $deviceType = getDeviceType();
        
        switch ($deviceType) {
            case 'mobile':
                $deviceDerect = 'mobile/';
                break;
            case 'tablet':
                $deviceDerect = 'tablet/';
                break;
            case 'desktop':
                $deviceDerect = 'desktop/';
                break;
            default:
                echo 'Unknown device type.';
                break;
        }

        if ($language === 'ja') {
            $langDerect = 'jp/';
        } else {
            $langDerect = 'en/';
        }

        $redirectUrl ='./'.$deviceDerect.'home/'.$langDerect.'index.php';

        header("Location: $redirectUrl");
        exit;
    ?>

    </main>
</body>

</html>