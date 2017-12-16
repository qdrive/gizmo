# gizmo
Just a super simple CSS framework!

## About
This was developed out of an interest in responsive CSS design. The tutorials and references from *[W3Schools](https://www.w3schools.com)* provided a great source of inspiration. 

## Getting Started

Update the *[yarn packages](https://yarnpkg.com)*:

```
$ yarn install
```

Reference the *gizmo.css* and *[FontAwesome](http://fontawesome.io)* stylesheets.

``` html
<html>
<head>
    <link href="gizmo-core.css" rel="stylesheet">
    <link href="gizmo-animate.css" rel="stylesheet">
    <link href="gizmo-colour.css" rel="stylesheet">
    <link href="gizmo-core.css" rel="stylesheet">
    <link href="gizmo-responsive.css" rel="stylesheet">
    <link href="gizmo-blue.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">
</head>
<body>
    ...

    ...
</body>
</html> 
```

Basic snippet

``` html
...
<div class="gz-row gz-white">
  <div class="gz-content-x2">
    <div class="gz-row-padding gz-padding-x6 gz-container">
      <div class="gz-col m12">
        <h1>Hey</h1>
        <h5 class="gz-justify">Hello World...</h5>
        <div class="gz-card-x2 gz-theme-dk gz-padding-x3 gz-round-x2 gz-margin-top">
          <p>Prepare to be taken over!</p>
        </div>
      </div>
    </div>
  </div>
</div>
...
```

> Examples can be found in the src directory.