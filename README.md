# Create NestJS Hexagonal & Clean Architecture 

## Description

[Nest](https://github.com/nestjs/nest) boilerplate which apply the hexagonal & clean architecture 

## Start

```bash
$ npx create-nestjs-hexagonal <project>
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development mode 
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Folder Structure 

### abstract 
<p>
    abstract folder include interface of factory / mapper / model / use-case and etc
    you can add interface file which used global 
</p>

### config
<p>
    config folder include setting file to connection other server like DB, MQ, GRPC  
</p>
<p>
    It also include the constant folder which used globally
</p>


----------------------------
# Construct of functional folder 
<p>
We Declare the functional folder is set of implemented the backend function which seperated by DDD rules
</p>
<p>
    you can change user folder to other name or add new folder, like product, order. It's only example of this template. I recommend to make folder follow the DDD rule
</p>
<p> 
    The User folder construct application, domain, infra folder
</p>

### application 
<p> 
    The application folder include business logic implement
</p>

------------

### domain
<p>
    The domain folder include core folder & port folder.  
</p>

#### core 
<p>
    Core folder include the model and type
</p>

#### port
<p>
    port(hexagonal architecture) folder include the port file that expressed interface file
</p>

----------- 

### Infra
<p>
    The infra folder include adapter and nestjs injection
</p>

#### adapter
<p>
    adapter is implemented by port interface file. It contains controller, repository and etc
</p>

#### nestjs
<p>
    nestjs folder contain dependency injection setting
</p>

-----------

# To Be Continue 
- apply CQRS 
- complete example of user