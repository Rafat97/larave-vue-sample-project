<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>


         <link href="/css/telwnd.css" rel="stylesheet">
        <link href="/css/app.css" rel="stylesheet">
        <script
      src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
      defer
    ></script>
    </head>
    <body class="antialiased">
        <div id="app">
            <app></app>
            <!-- <router-view></router-view> -->
            <!-- <example-component></example-component> -->
        </div>
    </body>
    <script src="/js/app.js"></script>
</html>
