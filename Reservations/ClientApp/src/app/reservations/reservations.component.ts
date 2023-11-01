import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-reservations-component',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})

export class ReservationsComponent implements OnInit {
  reservaciones: any[] = [];
  nacionalidades = [
    { text: "Dominicano", value: 1 },
    { text: "Alemana", value: 2 },
    { text: "Argentina", value: 3 },
    { text: "Boliviana", value: 4 },
    { text: "Brasileña", value: 5 },
    { text: "Canadiense", value: 6 },
    { text: "Chilena", value: 7 },
    { text: "Colombiana", value: 8 },
    { text: "Costarricense", value: 9 },
    { text: "Cubana", value: 10 },
    { text: "Dominicana", value: 1 },
    { text: "Ecuatoriana", value: 11 },
    { text: "Española", value: 12 },
    { text: "Estadounidense", value: 13 },
    { text: "Francesa", value: 14 },
    { text: "Griega", value: 15 },
    { text: "Guatemalteca", value: 16 },
    { text: "Hondureña", value: 17 },
    { text: "Inglesa", value: 18 },
    { text: "Italiana", value: 19 },
    { text: "Japonesa", value: 20 },
    { text: "Mexicana", value: 21 },
    { text: "Nicaragüense", value: 22 },
    { text: "Panameña", value: 23 },
    { text: "Paraguaya", value: 24 },
    { text: "Peruana", value: 25 },
    { text: "Portuguesa", value: 26 },
    { text: "Salvadoreña", value: 27 },
    { text: "Sueca", value: 28 },
    { text: "Suiza", value: 29 },
    { text: "Uruguaya", value: 30 },
    { text: "Venezolana", value: 31 },
  ];
  provincias = [
    { text: "Azua", value: 1 },
    { text: "Bahoruco", value: 2 },
    { text: "Barahona", value: 3 },
    { text: "Dajabón", value: 4 },
    { text: "Duarte", value: 5 },
    { text: "Elías Piña", value: 6 },
    { text: "El Seibo", value: 7 },
    { text: "Espaillat", value: 8 },
    { text: "Hato Mayor", value: 9 },
    { text: "Hermanas Mirabal", value: 10 },
    { text: "Independencia", value: 11 },
    { text: "La Altagracia", value: 12 },
    { text: "La Romana", value: 13 },
    { text: "La Vega", value: 14 },
    { text: "María Trinidad Sánchez", value: 15 },
    { text: "Monseñor Nouel", value: 16 },
    { text: "Monte Cristi", value: 17 },
    { text: "Monte Plata", value: 18 },
    { text: "Pedernales", value: 19 },
    { text: "Peravia", value: 20 },
    { text: "Puerto Plata", value: 21 },
    { text: "Samaná", value: 22 },
    { text: "Sánchez Ramírez", value: 23 },
    { text: "San Cristóbal", value: 24 },
    { text: "San José de Ocoa", value: 25 },
    { text: "San Juan", value: 26 },
    { text: "San Pedro de Macorís", value: 27 },
    { text: "Santiago", value: 28 },
    { text: "Santiago Rodríguez", value: 29 },
    { text: "Santo Domingo", value: 30 },
    { text: "Valverde", value: 31 },
  ];
  vehiculos = [
    { text: "Hyundai Santa FE SEL 2019 - Blanco", value: "1" },
    { text: "Hyundai Santa FE SEL 2019 - Blanco", value: "1" },
    { text: "Hyundai Santa FE Limited 2021- Negro", value: "2" },
    { text: "Hyundai Tucson SEL 2020 - Gris", value: "3" },
    { text: "Honda CR-V EXL 2021 - Negro", value: "4" },
    { text: "Honda CR-V Touring 2022  - Blanco", value: "5" },
    { text: "Honda CR-V EX 2020 - Azul", value: "6" },
    { text: "Honda Accord Sport 2.0T 2019 - Blanco", value: "7" },
    { text: "Honda Accord Sport EX 2019 - Gris", value: "8" },
    { text: "Honda Civic EX-T 2019 - Blanco", value: "9" },
    { text: "Honda Civic Touring 2019 - Blanco", value: "10" },
    { text: "Toyota RAV4 XLE 2020 - Negro", value: "11" },
    { text: "Toyota RAV4 Adventure 2022 - Gris", value: "12" },
    { text: "Toyota Camry SE 2019 - Azul", value: "13" },
    { text: "Toyota Land Cruiser VX.L 2020 - Negro", value: "14" },
    { text: "Toyota Corolla LE 2019 - Blanco", value: "15" },
    { text: "Toyota Corolla SE 2020 - Gris", value: "16" },
    { text: "Toyota Corolla CROSS 2019 - Blanco", value: "17" },
    { text: "Toyota Corolla CROSS 2019 - Rojo", value: "16" },
    { text: "Toyota LC Prado TXL 2020  - Gris", value: "17" },
    { text: "Toyota 4Runner 2018 - Blanco", value: "18" },
    { text: "Kia Sorento Limited 2021  - Negro", value: "19" },
    { text: "Kia Sportage Limited 2023 - Gris", value: "20" },
    { text: "Chevrolet TAHOE XRT 2020 - Negro", value: "21" },
    { text: "Chevrolet TAHOE High Country 2020 - Negro", value: "22" },
    { text: "Chevrolet Suburban High Country 2020 - Negro", value: "23" },
    { text: "Cadillac Scalade 600 2020 - Negro", value: "24" },
    { text: "Jeep Grand Cherokee Summit 2019 - Gris", value: "25" },
    { text: "Kia Seltos Limited 2020 - Blanco", value: "26" },
    { text: "Lexus RX350 F-Sport 2020 - Blanco", value: "27" },
    { text: "Lexus UX 2021 - Blanco", value: "28" },
    { text: "Lexus LX 600 2023 - Negro", value: "29" },
    { text: "Nissan Armada 2021 - Gris", value: "30" },
  ];
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  get nombreNoValido() {
    return this.form.get('nombres')?.invalid && this.form.get('nombres')?.touched;
  }
  get apellidoNoValido() {
    return this.form.get('apellidos')?.invalid && this.form.get('apellidos')?.touched;
  }
  get fechaNacimientoNoValido() {
    return this.form.get('fechaNacimiento')?.invalid && this.form.get('fechaNacimiento')?.touched;
  }
  get direccionNoValido() {
    return this.form.get('direccion')?.invalid && this.form.get('direccion')?.touched;
  }
  get NacionalidadNoValido() {
    return this.form.get('Nacionalidad')?.invalid && this.form.get('Nacionalidad')?.touched;
  }
  get sectorNoValido() {
    return this.form.get('sector')?.invalid && this.form.get('sector')?.touched;
  }
  get provinciaNoValido() {
    return this.form.get('provincia')?.invalid && this.form.get('provincia')?.touched;
  }
  get numtelNoValido() {
    return this.form.get('numtel')?.invalid && this.form.get('numtel')?.touched;
  }
  get correoelectNoValido() {
    return this.form.get('correoelect')?.invalid && this.form.get('correoelect')?.touched;
  }
  get fechaEntregaNoValido() {
    return this.form.get('fechaEntrega')?.invalid && this.form.get('fechaEntrega')?.touched;
  }
  get fechaDevolucionNoValido() {
    return this.form.get('fechaDevolucion')?.invalid && this.form.get('fechaDevolucion')?.touched;
  }
  get vehiculoNoValido() {
    return this.form.get('vehiculo')?.invalid && this.form.get('vehiculo')?.touched;
  }
  get cantConductoresNoValido() {
    return this.form.get('cantConductores')?.invalid && this.form.get('cantConductores')?.touched;
  }
  get cedulaPasaporteNoValido() {
    return this.form.get('cedulaPasaporte')?.invalid && this.form.get('cedulaPasaporte')?.touched;
  }
  get metodoPagoNoValido() {
    return this.form.get('metodoPago')?.invalid && this.form.get('metodoPago')?.touched;
  }
  get licenciaNoValido() {
    return this.form.get('licencia')?.invalid && this.form.get('licencia')?.touched;
  }

  crearFormulario() {
    this.form = this.fb.group(
      {
        nombres: ['', [Validators.required, Validators.maxLength(50)]],
        apellidos: ['', [Validators.required, Validators.maxLength(50)]],
        fechaNacimiento: ['', Validators.required],
        Nacionalidad: ['', Validators.required],
        direccion: ['', Validators.required, Validators.maxLength(500)],
        sector: ['', Validators.required],
        provincia: ['', Validators.required],
        numtel: ['', Validators.required],
        correoelect: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        fechaEntrega: ['', Validators.required],
        fechaDevolucion: ['', Validators.required],
        vehiculo: ['', Validators.required],
        cantConductores: ['', Validators.required],
        millasIlimitadas: [''],
        gps: [''],
        asisCarret: [''],
        pasoRapido: [''],
        tipoPersona: ['', Validators.required],
        metodoPago: ['', Validators.required],
        cedulaPasaporte: ['', Validators.required],
        licencia: ['', Validators.required],
        comentarios: [''],
      }
    )
  }

  limpiar() {
    this.form.reset();
  }

  @ViewChild('tableReservaciones', { static: false }) tableReservaciones!: ElementRef;



  ngOnInit(): void {
    $(document).ready(() => {
      $(".seelects").select2({
        placeholder: "Seleccione...",
        allowClear: true,
        language: "es",
      });

      this.nacionalidades.forEach(item => {
        $("#nacionalidadSelect").append('<option value="' + item.value + '">' + item.text + "</option>");
      });
      this.provincias.forEach(item => {
        $("#provinciasSelect").append('<option value="' + item.value + '">' + item.text + "</option>");
      });

      this.vehiculos.forEach(item => {
        $("#vehiculosSelect").append('<option value="' + item.value + '">' + item.text + "</option>");
      });
    });
  }

  ngAfterViewInit(): void {
    this.tableReservaciones.nativeElement
  }

  onSubmit() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(control => {
        control.markAllAsTouched();
      })
    } else {

      const nacionalidadTexto = this.nacionalidades.find(
        (item) => item.value === parseInt(this.form.value.Nacionalidad)
      )?.text;

      const provinciaTexto = this.provincias.find(
        (item) => item.value === parseInt(this.form.value.provincia)
      )?.text;

      // Encuentra el texto correspondiente al vehículo
      const vehiculoTexto = this.vehiculos.find(
        (item) => item.value === this.form.value.vehiculo
      )?.text;

      this.reservaciones.push({
        nombres: this.form.value.nombres,
        apellidos: this.form.value.apellidos,
        fechaNacimiento: this.form.value.fechaNacimiento,
        nacionalidad: nacionalidadTexto,
        direccion: this.form.value.direccion,
        sector: this.form.value.sector,
        provincia: provinciaTexto,
        tel: this.form.value.numtel,
        email: this.form.value.correoelect,
        fechaEntrega: this.form.value.fechaEntrega,
        fechaDevolucion: this.form.value.fechaDevolucion,
        vehiculo: vehiculoTexto,
        cantConductores: this.form.value.cantConductores,
        opciones:
          (this.form.value.millasIlimitadas === true ? "Millas ilimitadas" : "") +
          (this.form.value.gps === true ? ", GPS" : "") +
          (this.form.value.asisCarret === true ? ", Asist. Carrt 24/7" : "") +
          (this.form.value.pasoRapido === true ? ", Paso rápido" : ""),
        tipoPersona: this.form.value.tipoPersona,
        metodoPago: this.form.value.metodoPago,
        cedulaPasaporte: this.form.value.cedulaPasaporte,
        licencia: this.form.value.licencia,
        comentarios: this.form.value.comentarios,
      });

      console.log(this.reservaciones);

      const table = this.tableReservaciones.nativeElement as HTMLTableElement;
      const tbody = table.getElementsByTagName('tbody')[0];
      tbody.innerHTML = '';

      for (let i = 0; i < this.reservaciones.length; i++) {
        const reserva = this.reservaciones[i];

        const row = tbody.insertRow(i);

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(6);
        const cell8 = row.insertCell(7);
        const cell9 = row.insertCell(8);
        const cell10 = row.insertCell(9);
        const cell11 = row.insertCell(10);
        const cell12 = row.insertCell(11);
        const cell13 = row.insertCell(12);
        const cell14 = row.insertCell(13);
        const cell15 = row.insertCell(14);
        const cell16 = row.insertCell(15);
        const cell17 = row.insertCell(16);
        const cell18 = row.insertCell(17);
        const cell19 = row.insertCell(18);

        cell1.innerHTML = reserva.nombres;
        cell2.innerHTML = reserva.apellidos;
        cell3.innerHTML = reserva.fechaNacimiento;
        cell4.innerHTML = reserva.nacionalidad;
        cell5.innerHTML = reserva.direccion;
        cell6.innerHTML = reserva.sector;
        cell7.innerHTML = reserva.provincia;
        cell8.innerHTML = reserva.tel;
        cell9.innerHTML = reserva.email;
        cell10.innerHTML = reserva.fechaEntrega;
        cell11.innerHTML = reserva.fechaDevolucion;
        cell12.innerHTML = reserva.vehiculo;
        cell13.innerHTML = reserva.cantConductores;
        cell14.innerHTML = reserva.opciones;
        cell15.innerHTML = reserva.tipoPersona;
        cell16.innerHTML = reserva.metodoPago;
        cell17.innerHTML =
          '<a href="' + reserva.cedulaPasaporte + '" target="_blank">Ver</a>';
        cell18.innerHTML =
          '<a href="' + reserva.licencia + '" target="_blank">Ver</a>';
        cell19.innerHTML = reserva.comentarios;
      }

      this.limpiar();
    }
  }
}
