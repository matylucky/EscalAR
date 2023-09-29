import 'package:flutter/material.dart';
import 'package:email_validator/email_validator.dart';
//import 'package:flutter_datetime_picker/flutter_datetime_picker.dart';

void main() => runApp(MyApp(
//  title: 'rutina',
  // Start the app with the "/" named route. In this case, the app starts
  // on the FirstScreen widget.
//  initialRoute: '/',
//  routes: {
    // When navigating to the "/" route, build the FirstScreen widget.
//    '/': (context) => const UserRegistrationForm(),
    // When navigating to the "/second" route, build the SecondScreen widget.
//    '/second': (context) => const pantallaregistro(),
//  },
  )
);

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Formulario de Alta de Usuario',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: UserRegistrationForm(),
    );
  }
}

class UserRegistrationForm extends StatefulWidget {
  @override
  _UserRegistrationFormState createState() => _UserRegistrationFormState();
}

class _UserRegistrationFormState extends State<UserRegistrationForm> {
  final _formKey = GlobalKey<FormState>();
  String _nombre = '';
  String _email = '';
  String _password = '';
  String _sexo = 'Masculino'; // Valor predeterminado
  String _actividad = 'Seleccionar'; // Valor predeterminado
  String _condicion = 'Seleccionar'; // Valor predeterminado
  DateTime _fechaNacimiento = DateTime.now(); // Valor predeterminado

  List<String> _actividades = [
    'Seleccionar',
    'Via Ferrata',
    'Escalada Deportiva',
    'Escalada Clásica',
    'Escalada Alpina',
    'Escalada en Hielo',
  ];

  List<String> _condiciones = [
    'Seleccionar',
    'Buena',
    'Regular',
    'Mala',
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Alta de Usuario'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              TextFormField(
                decoration: InputDecoration(labelText: 'Nombre'),
                validator: (value) {
                  if (value?.isEmpty ?? true) {
                    return 'Por favor ingresa tu nombre';
                  }
                  return null;
                },
                onSaved: (value) {
                  _nombre = value!;
                },
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Email'),



               validator: (value) {
                if (value?.isEmpty ?? true) {
                  return 'Por favor ingresa tu email';
                }
                //
                //validator: (email) => !EmailValidator.validate(email) ?  "Please enter a valid email"
                // : null,
                },
                onSaved: (email) {
                  _email = email!;
                },
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Contraseña'),
                obscureText: true,
                validator: (value) {
                  if (value?.isEmpty ?? true) {
                    return 'Por favor ingresa tu contraseña';
                  }
                  return null;
                },
                onSaved: (value) {
                  _password = value!;
                },
              ),
              DropdownButtonFormField<String>(
                value: _sexo,
                onChanged: (value) {
                  setState(() {
                    _sexo = value!;
                  });
                },
                items: ['Masculino', 'Femenino', 'Otro'].map((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(value),
                  );
                }).toList(),
                decoration: InputDecoration(labelText: 'Sexo'),
              ),
              DropdownButtonFormField<String>(
                value: _actividad,
                onChanged: (value) {
                  setState(() {
                    _actividad = value!;
                  });
                },
                items: _actividades.map((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(value),
                  );
                }).toList(),
                decoration: InputDecoration(labelText: 'Actividad'),
              ),
              DropdownButtonFormField<String>(
                value: _condicion,
                onChanged: (value) {
                  setState(() {
                    _condicion = value!;
                  });
                },
                items: _condiciones.map((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(value),
                  );
                }).toList(),
                decoration: InputDecoration(labelText: 'Condición'),
              ),
       //       TextButton(
       //         onPressed: () {
       //          DatePicker.showDatePicker(
       //            context,
       //             showTitleActions: true,
       //             minTime: DateTime(1900),
       //             maxTime: DateTime.now(),
       //             onConfirm: (date) {
       //               setState(() {
       //                 _fechaNacimiento = date;
       //               });
       //            },
       //             currentTime: _fechaNacimiento,
       //           );
       //         },
       //         child: Text(
       //           'Fecha de Nacimiento: ${_fechaNacimiento.toLocal()}',
       //         ),
       //       ),
              SizedBox(height: 16.0),
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    // Aquí puedes guardar los datos del usuario en tu base de datos o realizar otras acciones.
                    print('Nombre: $_nombre');
                    print('Email: $_email');
                    print('Contraseña: $_password');
                    print('Sexo: $_sexo');
                    print('Actividad: $_actividad');
                    print('Fecha de Nacimiento: $_fechaNacimiento');
                  }
                },
                child: Text('Registrar'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
////////////////

class pantallaregistro extends StatelessWidget {
  const pantallaregistro({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Te registraste en EscalAR'),
      ),
      body: Center(
        child: ElevatedButton(
          // Within the SecondScreen widget
          onPressed: () {
            // Navigate back to the first screen by popping the current route
            // off the stack.
            Navigator.pop(context);
          },
          child: const Text('Volver al inicio'),
        ),
      ),
    );
  }
}


