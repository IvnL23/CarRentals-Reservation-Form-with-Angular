using System;
using System.Collections.Generic;

namespace Reservations.Models;

public partial class Reservation
{
    public int Id { get; set; }

    public string Nombres { get; set; } = null!;

    public string Apellidos { get; set; } = null!;

    public DateTime FechaNacimiento { get; set; }

    public int Nacionalidad { get; set; }

    public string Direccion { get; set; } = null!;

    public string Sector { get; set; } = null!;

    public int Provincia { get; set; }

    public string NumeroTelefeno { get; set; } = null!;

    public string? Email { get; set; }

    public DateTime FechaEntrega { get; set; }

    public DateTime FechaDevolucion { get; set; }

    public int Vehiculo { get; set; }

    public int? CantidadConductores { get; set; }

    public bool? MillasIlimitadas { get; set; }

    public bool? Gps { get; set; }

    public bool? AsistenciaCarretera { get; set; }

    public bool? PasoRapidoPeaje { get; set; }

    public bool? TipoPersona { get; set; }

    public int MetodoPago { get; set; }

    public string? FotoCedulaSrc { get; set; }

    public string? LicenciaConducirSrc { get; set; }

    public string? Comentarios { get; set; }
}
