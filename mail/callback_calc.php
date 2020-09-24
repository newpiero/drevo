<?php










        require_once('phpmailer/PHPMailerAutoload.php');

        $mail = new PHPMailer;
        $mail->CharSet = 'utf-8';

        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'drevo-zhizn@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
        $mail->Password = 'e76GBo'; // Ваш пароль от почты с которой будут отправляться письма
        $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

        $mail->setFrom('drevo-zhizn@yandex.ru', 'Древо Жизни');
        $mail->addAddress('irinarad2009@yandex.ru');
        $mail->isHTML(true);

        $mail->Subject = 'Заполнена форма Узнать стоимость проживания';




        $fields = array(
            'psih_rasstroistvo' => 'Психическое расстройство',
            'invalidnost' => 'Инвалидность',
            'lejachi' => 'Лежачий(ая)',
            'samostoyatelni' => 'Самостоятельный(ая)',
            'demenciya' => 'Деменция',
            'algeimera' => 'Болезнь Альцгеймера',
            'parkinsona' => 'Болезнь Паркинсона',
            'infarkt' => 'После инфаркта',
            'insult' => 'После инсульта',
            'perelom_bedra' => 'После перелома шейки бедра',
            'slabov' => 'Слабовидящий(ая)',
            'slep' => 'Слепой(ая)',
            'name'   => 'Имя',
            'phone_calc'  => 'Телефон',

        );

        $required = array('name', 'mail');

        $body = array();
        foreach ($fields as $field => $label) {
            //if (in_array($field, $required) && !isset($_REQUEST[$field]) || empty($_REQUEST[$field])) die;

            if (isset($_REQUEST[$field]) && trim($_REQUEST[$field])) {
                $body[] = sprintf('<p><b>%s:</b> %s</p>', $label, trim($_REQUEST[$field]));
            }
        }

        $body = implode($body);



        $mail->Body    = $body;
        $mail->AltBody = '';
        If(($mail->send())==true)
            require_once('redirect.php');











    









