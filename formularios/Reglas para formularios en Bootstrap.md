# Reglas de Oro para trabajar con formularios en Bootstrap 4

## Las 10 Reglas de ORO para dominar los componenetes form

1. **Regla 1:** Los campos inputs de tipo text, select y textarea tienen que tener la clase **form-control**. Esto permitira que los campos _inputs_ ocupen todo el ancho disponible y cambia la apariencia definida por bootstrap

```
<form action="">

    <label for="nombre">Nombre</label>
    input type="text" name="nombre" id="nombre" class="form-control" placeholder="Ingresar el nombre">


    <label for="apellido">Apellido</label>
    <input type="text" name="apellido" id="apellido" class="form-control" placeholder="Ingrese su apellido">

    <input type="submit" class="btn btn-primary" value="Enviar">

</form>
```

2. **Regla 2:** Todos los campos y etiquetas deben estar dentro de un contenedor con la clase **form-group**. Esto nos permite organizar mejor los inputs del formulario

```
<form action="">

    <div class="form-group">
        <label for="nombre">Nombre</label>
        input type="text" name="nombre" id="nombre" class="form-control" placeholder="Ingresar el nombre">
    </div>

    <div class="form-group">
        <label for="apellido">Apellido</label>
        <input type="text" name="apellido" id="apellido" class="form-control" placeholder="Ingrese su apellido">
    </div>

    <input type="submit" class="btn btn-primary" value="Enviar">

</form>
```

3. **Regla 3:** Aumentamos y reducimos el tamaño de los campos con las clases **form-control-lg** y **form-control-sm**. Esto reducira o aumentara el tamaño de la letra y la altura de los campos

```
<form action="">

    <div class="form-group">
        <label for="nombre">Nombre</label>
        input type="text" name="nombre" id="nombre" class="form-control form-control-lg" placeholder="Ingresar el nombre">
    </div>

    <div class="form-group">
        <label for="apellido">Apellido</label>
        <input type="text" name="apellido" id="apellido" class="form-control form-control-sm" placeholder="Ingrese su apellido">
    </div>

    <input type="submit" class="btn btn-primary" value="Enviar">

</form>
```

4. **Regla 4:** Aumentamos y reducimos el tamaño de los labels con las clases **col-form-label-sm** y **col-form-label-lg**

```
<form action="">

    <div class="form-group">
        <label for="nombre" class="col-form-label-lg">Nombre</label>
        input type="text" name="nombre" id="nombre" class="form-control form-control-lg" placeholder="Ingresar el nombre">
    </div>

    <div class="form-group">
        <label for="apellido" class="col-form-label-sm">Apellido</label>
        <input type="text" name="apellido" id="apellido" class="form-control form-control-sm" placeholder="Ingrese su apellido">
    </div>

    <input type="submit" class="btn btn-primary" value="Enviar">

</form>
```

5. **Regla 5:** Creamos texto de ayuda con la clase **form-text**

```
<form action="">

    <div class="form-group">
        <label for="nombre" class="col-form-label-lg">Nombre</label>
        input type="text" name="nombre" id="nombre" class="form-control form-control-lg" placeholder="Ingresar el nombre">
        <small class="form-text text-muted">Ingrese su nombre tal cual figura en su DNI</small>

    </div>

    <div class="form-group">
        <label for="apellido" class="col-form-label-sm">Apellido</label>
        <input type="text" name="apellido" id="apellido" class="form-control form-control-sm" placeholder="Ingrese su apellido">
        <small class="form-text text-muted">Ingrese su apellido tal cual figura en el DNI</small>
    </div>

    <input type="submit" class="btn btn-primary" value="Enviar">

</form>
```

6. **Regla 6:** Los _botones de opción_ deben estar dentro de un contenedor con la clase **form-check**.

_Nota 1: Todos los inputs de tipo radio deben tener un unico 'name' para que solo se seleccione un solo radio a la vez._

_Nota 2: Todos los inputs tipo radio deben tener la clase form-check-input_

_Nota 3: Todos los label que acompañan a los radios deben tener la clase form-check-label_

```
<div class="row justify-content-center">
    <div class="col-md-8">
        <form action="" class="border rounded bg-ligth p-3 mt-3">

                <h4 class="h4 text-center">Botones de Opciones con Bootstrap 4</h4>

                <div class="form-group">

                    <div class="form-check">
                        <input type="radio" class="form-check-input" name="conocimientos" value="CSS" id="CSS">
                        <label class="form-check-label" for="CSS">CSS</label>
                    </div>

                    <div class="form-check">
                        <input type="radio" class="form-check-input" name="conocimientos" value="HTML" id="HTML">
                        <label class="form-check-label" for="HTML">HTML</label>
                    </div>

                    <div class="form-check">
                        <input type="radio" class="form-check-input" name="conocimientos" value="JAVASCRIPT" id="JAVASCRIPT">
                        <label class="form-check-label" for="JAVASCRIPT">JAVASCRIPT</label>
                    </div>

                </div>

                <div class="form-group">
                    <input type="submit" value="Enviar" class="btn btn-primary">
                </div>

        </form>
    </div>
</div>
```

7. **Regla 7:** Las _casillas de verificaciones_ deben estar contenidas en una clase **form-check**.

```
<div class="col-md-6">

    <form action="" class="border rounded bg-ligth p-3 mt-3">

        <h4 class="h4 text-center">Botones de Opciones con Bootstrap 4: CheckBox</h4>

        <div class="form-group">

            <div class="form-check">
                <input type="checkbox" name="conocimientos" class="form-check-input" id="css" value="css">
                <label class="form-check-label" for="css">CSS</label>
            </div>

            <div class="form-check">
                <input type="checkbox" name="conocimientos" class="form-check-input" id="html" value="html">
                <label for="html" class="form-check-label">HTML</label>
            </div>

            <div class="form-check">
                <input type="checkbox" name="conocimientos" class="form-check-input" id="javascript" value="javascript">
                <label for="javascript" class="form-check-label">JAVASCRIPT</label>
            </div>

        </div>

        <div class="form-group">
            <input type="submit" value="Enviar" class="btn btn-primary btn-block">
        </div>

    </form>

</div>
```

8. **Regla 8:** Para crear _casillas de verificaciones y botones de opciones en linea_ deben estar contenidas en una clase **form-check-inline**.

```
<div class="col-8">
    <form action="" class="border rounded bg-ligth p-3 mt-3">
        <h4 class="h4 text-center">
            Botones de Opciones con Bootstrap 4: En Linea
        </h4>
        <div class="form-group">
            <label class="h5 d-block">Tecnologias BackEnd</label>
            <div class="form-check form-check-inline">
                <input type="radio" name="backend" id="Node" value="Node" class="form-check-input">
                <label for="Node" class="form-check-label">Node</label>
            </div>
            <div class="form-check form-check-inline">
                <input type="radio" name="backend" id="Php" value="Php" class="form-check-input">
                <label for="Php" class="form-check-label">Php</label>
            </div>
            <div class="form-check form-check-inline">
                <input type="radio" name="backend" id="Java" value="Java" class="form-check-input">
                <label for="Java" class="form-check-label">Java</label>
            </div>
        </div>
        <div class="form-group">
            <label class="h5 d-block">Tecnologias FrontEnd</label>
            <div class="form-check form-check-inline">
                <input type="checkbox" name="frontend" id="Html5" value="Html5" class="form-check-input">
                <label for="Html5" class="form-check-label">Html5</label>
            </div>
            <div class="form-check form-check-inline">
                <input type="checkbox" name="frontend" id="Css3" value="Css3" class="form-check-input">
                <label for="Css3" class="form-check-label">Css3</label>
            </div>
            <div class="form-check form-check-inline">
                <input type="checkbox" name="frontend" id="JavaScriptModerno" value="JavaScriptModerno" class="form-check-input">
                <label for="JavaScriptModerno" class="form-check-label">JavaScript Moderno</label>
            </div>
        </div>
        <div class="form-group">
            <input type="submit" value="Enviar" class="btn btn-primary btn-block">
        </div>
    </form>
</div>
```

9. **Regla 9:** Creamos diseños para los campos, integrando el componente **Input Group**.

```
<form action="" class="border rounded bg-ligth p-3 mt-3">
            <h4 class="text-center">Inputs Groups</h4>
            <div class="form-group">
              <label for="precio">Precio</label>
              <!--Para Agrandar el campo con los inputs groups, se utiliza la clase input-group-lg-->
              <div class="input-group input-group-lg">
                <!--Prefijo de campo-->
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <!--Campo-->
                <input
                  type="number"
                  name="precio"
                  id="precio"
                  class="form-control"
                />
                <!--Subfijo de campo-->
                <div class="input-group-prepend">
                  <span class="input-group-text">.00</span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="precio">Precio</label>
              <div class="input-group">
                <!--Prefijo de campo-->
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <!--Campo-->
                <input
                  type="number"
                  name="precio"
                  id="precio"
                  class="form-control"
                />
                <!--Subfijo de campo-->
                <div class="input-group-prepend">
                  <span class="input-group-text">.00</span>
                </div>
              </div>
            </div>
            <div class="form-group input-group-sm">
              <label for="precio">Precio</label>
              <!--Para Achicar el campo con los inputs groups, se utiliza la clase input-group-sm-->
              <div class="input-group">
                <!--Prefijo de campo-->
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <!--Campo-->
                <input
                  type="number"
                  name="precio"
                  id="precio"
                  class="form-control"
                />
                <!--Subfijo de campo-->
                <div class="input-group-prepend">
                  <span class="input-group-text">.00</span>
                </div>
              </div>
            </div>
            <div class="form-group input-group-sm">
              <label for="precio">Precio con FontAwesome</label>
              <!--Para Achicar el campo con los inputs groups, se utiliza la clase input-group-sm-->
              <div class="input-group">
                <!--Prefijo de campo-->
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-money-bill"></i
                  ></span>
                </div>
                <!--Campo-->
                <input
                  type="number"
                  name="precio"
                  id="precio"
                  class="form-control"
                />
              </div>
            </div>
          </form>
```
10. **Regla 10:** Los formularios pueden tener 3 tipos de diseños

    - **Vertical**: Son los tipicos formularios en donde viene el *label* y abajo el *input*. Estos son los que se crean por defecto en Bootstrap
    - **En Linea**: Estos tipos de formularios generalmente tienen 3 o 4 campos en linea de forma seguida. Se suelen utilizar para cajas de busqueda, login en con el formato en linea y en los blogs para realizar las suscripciones generalmente. 

    *Nota:* En los formularios en linea no se utiliza la clase **form-group**, el elemento form lleva la clase **form-inline** y los espaciados en los diferentes contextos se realizan con las clases de bootstrap *m-1, m-2, p-1, p-2, etc*

    ```
    <section class="bg-light p-3 border">
        <div class="container">
            <div class="row justify-content-md-between">

                <div class="col-12 col-md-auto">
                    <a href="#">
                        <img src="../images/logo.svg" alt="Logo del sitio" width="120px">
                    </a>
                </div>

                <div class="col-12 col-md-auto">
                    <form action="" class="form-inline"> 

                            <label for="usuario" class="sr-only">usuario</label>
                            <div class="input-group my-2 my-sm-0 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i class="fas fa-user"></i>
                                    </div>
                                </div>
                                <input type="text" name="usuario" id="usuario" class="form-control" placeholder="Usuario" size="10">
                            </div>
                            

                            <label for="password" class="sr-only">Password</label>
                            <div class="input-group mb-2 mb-sm-0 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i class="fas fa-key"></i>
                                    </div>
                                </div>
                                <input type="password" name="password" id="password" class="form-control" placeholder="Password" size="10">
                            </div>

                            <input type="submit" value="Ingresar" class="btn btn-primary">

                    </form>
                </div>
                
            </div>
        </div>
    </section>
    ```

    - **Horizontal**: Para estos tipos de formularios se utilizaran las clases de filas y columnas de bootstrap, pero en si no se utiliza la clase *row* sino la clase *form-row*, esta disminuye el espaciado entre los labels y los inputs cuando estan horizontal. En los labels se utiliza la clase *col-form-label* la cual alinea los labels con los inputs de manera vertical para que queden centrados.

    ```
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 p-5">
                <form action="" class="bg-light p-3">
                    <h2 class="text-center">Solicitud de Soporte</h2>
                
                    <!--Campo Nombre-->
                    <div class="form-group form-row">
                        <label for="nombre" class="col-form-label col-12 col-md-2">Nombre</label>
                        <div class="input-group col-12 col-md-10">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-user-alt"></i>
                                </span>
                            </div>
                            <input type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre..." class="form-control">
                        </div>
                    </div>

                    <!--Campo Email-->
                    <div class="form-group form-row">
                        <label for="email" class="col-12 col-md-2 col-form-label">Email</label>
                        <div class="input-group col-12 col-md-10">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                            <input type="email" name="email" id="email" placeholder="Ingrese su Email..." class="form-control">
                        </div>
                    </div>

                    <!--Campo Mensaje-->
                    <div class="form-group form-row">
                        <label for="mensaje" class="col-12 col-md-2 col-form-label align-self-center">Mensaje</label>
                        <div class="input-group col-12 col-md-10">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-comment"></i>
                                </span>
                            </div>
                            <textarea name="mensaje" id="mensaje" class="form-control" rows="5"></textarea>
                        </div>
                    </div>

                    <!--Campo Condicion-->
                    <div class="form-group form-row">
                        <div class="col-auto offset-md-2">
                            <div class="form-check">
                                <input type="checkbox" name="condicion" id="condicion" class="form-check-input">
                                <label for="condicion" class="form-check-label">Acepta todos los terminos y condiciones</label>
                            </div>
                        </div>
                    </div>

                    <!--Botones-->
                    <div class="form-group form-row">
                        <div class="col-auto offset-md-2">
                            <input type="submit" value="Enviar" class="btn btn-primary">
                            <input type="reset" value="Limpiar" class="btn btn-secondary">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    ```
    **Formulario Avanzado:**

    ```
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9 p-5">
          <form action="" class="bg-light p-3">
            <h2 class="text-center mb-4">Formulario de Pedido</h2>

            <!--Sección Información Personal-->
            <div class="form-row mb-4">
              <div class="col-12 text-info mb-4">
                <h4>
                  <span class="fa-stack">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fas fa-user fa-stack-1x fa-inverse"></i>
                  </span>
                  Información Personal
                </h4>
              </div>

              <div class="form-group col-12 col-sm-6">
                <label for="nombre">Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Ingrese su Nombre"
                  class="form-control"
                />
              </div>
              <div class="form-group col-12 col-sm-6">
                <label for="apellidos">Apellidos:</label>
                <input
                  type="text"
                  name="apellidos"
                  id="apellidos"
                  placeholder="Ingrese sus apellidos"
                  class="form-control"
                />
              </div>
              <div class="form-group col-12 col-sm-6">
                <label for="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ingrese su Email"
                  class="form-control"
                />
              </div>
              <div class="form-group col-12 col-sm-6">
                <label for="telefono">Teléfono:</label>
                <input
                  type="text"
                  name="telefono"
                  id="telefono"
                  placeholder="Ingrese su Teléfono"
                  class="form-control"
                />
              </div>
            </div>

            <!--Sección Dirección de Envio-->
            <div class="form-row mb-4">
              <div class="col-12 text-info mb-4">
                <h4>
                  <span class="fa-stack">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fas fa-map-marked-alt fa-stack-1x fa-inverse"></i>
                  </span>
                  Dirección de Envio
                </h4>
              </div>

              <div class="form-group col-12">
                <label for="dirección">Dirección:</label>
                <input
                  type="text"
                  name="direccion"
                  id="direccion"
                  placeholder="Ingrese su Dirección"
                  class="form-control"
                />
              </div>
              <div class="form-group col-6 col-md-4">
                <label for="provincia">Provincia:</label>
                <input
                  type="text"
                  name="provincia"
                  id="provincia"
                  placeholder="Ingrese su Provincia"
                  class="form-control"
                />
              </div>
              <div class="form-group col-6 col-md-4">
                <label for="ciudad">Ciudad:</label>
                <input
                  type="text"
                  name="ciudad"
                  id="ciudad"
                  placeholder="Ingrese su Ciudad"
                  class="form-control"
                />
              </div>
              <div class="form-group col-12 col-md-4">
                <label for="cp">Código Postal:</label>
                <input
                  type="text"
                  name="cp"
                  id="cp"
                  placeholder="Ingrese su Código Postal"
                  class="form-control"
                />
              </div>
            </div>

            <!--Sección Fecha de Envio-->
            <div class="form-row mb-2">
              <div class="col-12 text-info mb-4">
                <h4>
                  <span class="fa-stack">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fas fa-calendar fa-stack-1x fa-inverse"></i>
                  </span>
                  Fecha de Envio
                </h4>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-row">
                  <div class="form-group col-12 col-sm-6 col-md-12">
                    <label for="fechaEnvio">Fecha de Envío:</label>
                    <input
                      type="text"
                      name="fechaEnvio"
                      id="fechaEnvio"
                      class="form-control"
                      placeholder="Por Ej: 12/03/2020"
                    />
                  </div>
                  <div class="form-group col-12 col-sm-6 col-md-12">
                    <label for="horaEnvio">Hora de Envío:</label>
                    <input
                      type="text"
                      name="horaEnvio"
                      id="horaEnvio"
                      class="form-control"
                      placeholder="Por Ej: 12:30PM"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group col-12 col-md-6">
                <label for="comentarios">Comentariós:</label>
                <textarea
                  name="comentarios"
                  id="comentarios"
                  rows="5"
                  placeholder="Ingrese sus comentarios del pedido"
                  class="form-control"
                ></textarea>
              </div>
            </div>

            <!--Sección de los Botones-->
            <div class="form-row form-group justify-content-center">
              <div class="col-12 col-md-3">
                <button
                  type="submit"
                  class="btn btn-block btn-primary mb-2 mb-md-0"
                >
                  <i class="fas fa-paper-plane mr-1"></i>
                  Enviar
                </button>
              </div>
              <div class="col-12 col-md-3">
                <button type="reset" class="btn btn-secondary btn-block">
                  <i class="fas fa-times mr-1"></i>
                  Limpiar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    ```
