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

# Folder Structure 


## Global 
<p>The Global Folder contains global properties like, global used interface, error type, external module configuration and etc..</p>

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

### Error
<p>
    error folder include custom error settings   
</p>

### Lib
<p>
    Lib folder contain the external module custom library which can use the adapter files.
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
    The User folder construct adaptor, core, port folder
</p>

------------

## Port
<p>
    port(hexagonal architecture) folder include the port file that expressed interface file
</p>

## Adapter
<p>
    adapter is implemented by port interface file. It contains controller, repository and etc
</p>

## Core
<p>
    Core is about the core logic of the domain. It contains application , domain, type folder 
</p>

### application
<p> 
    The application folder include business logic implement which contain the use-case, factory, mapper files.
</p>


### domain
<p>
    The domain folder include core model logic files
</p>

### type 
<p>
    Type folder include the Core of type like model properties type, etd
</p>
