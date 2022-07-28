<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rosenteatret</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<div id="header"> </div>

  <div class="contactHighlight">
    <h4 class="contactHighlightText">TAK FOR DIN BESTILLING!</h1>
  </div>
<div class="confirmedOrder">
  <h2 class="fadedText">Ordrebekræftelse:</h2>
  <h1 class="orderName">DÆKSPARK</h1>
  <?php echo $_GET["number"]; ?> Billetter
</div>

<div class="confirmedOrder">
    <h2 class="fadedText">Navn</h2>
    <?php echo $_GET["name"]; ?>
    <h2 class="fadedText">Adresse</h2>
    <?php echo $_GET["add"]; ?>
    <h2 class="fadedText">Email</h2>
    <?php echo $_GET["email"]; ?>
</div>


<div id="footer">
</div>
<script src="js/components.js"></script>
</body>
</html>

