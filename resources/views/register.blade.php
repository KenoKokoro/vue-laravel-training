<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>

<div id="app">
    <div class="container box column is-6">
        <registration-form endpoint="{{ route('register') }}"></registration-form>
    </div>
</div>

</body>
<script src="{{ mix('js/app.js') }}"></script>
</html>
