<!DOCTYPE html>
<html>
<head>
 <link href="https://fonts.googleapis.com/css?family=Lora:400,400i|Sawarabi+Mincho&display=swap" rel="stylesheet">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>sample</title>
</head>

<body>

<h1>問合せ内容</h1>

<form action="mailto.php" method="post">

  <table border="1">
    <tr>
      <td>名前</td>
      <td><?php echo $_POST["name"]; ?></td>
    </tr>
    <tr>
      <td>TEL</td>
      <td><?php echo $_POST["tel"]; ?></td>
    </tr>
    <tr>
      <td>メールアドレス</td>
      <td><?php echo $_POST["mail"]; ?></td>
    </tr>
    <tr>
      <td>会社名</td>
      <td><?php echo $_POST["company"]; ?></td>
    </tr>
    <tr>
      <td>題名</td>
      <td><?php echo $_POST["section"]; ?></td>
    </tr>
    <tr>
      <td>問い合わせ内容</td>
      <td><?php echo $_POST["inquiry"]; ?></td>
    </tr>
  </table>

  <input type="submit" value="送信" />
</form>

</body>

</html>
