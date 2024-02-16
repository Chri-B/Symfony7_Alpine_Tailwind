# Symfony7_Alpine_Tailwind
A Symfony 7 project with Alpine.js and Tailwind integration


### When downloading for the first time on your machine, run these commands:
```
composer install
php bin/console importmap:install
```

### To run the project, simply use **(*)**:
```
symfony server:start
or
symfony serve
```

### **(*)** assicurarsi di avere un file .symfony.local.yaml con questa configurazione:
```
workers:
  tailwind:
    cmd: ["symfony", "console", "tailwind:build", "--watch"]
```