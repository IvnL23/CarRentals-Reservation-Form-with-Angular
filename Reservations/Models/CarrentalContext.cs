using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Reservations.Models;

public partial class CarrentalContext : DbContext
{
    public CarrentalContext()
    {
    }

    public CarrentalContext(DbContextOptions<CarrentalContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Reservation> Reservations { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
       /* #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("server=localhost; database=carrental; integrated security=true;TrustServerCertificate=True;");*/
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Reservation>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__reservat__3213E83F98A1281D");

            entity.ToTable("reservations");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Apellidos)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("apellidos");
            entity.Property(e => e.AsistenciaCarretera).HasColumnName("asistencia_carretera");
            entity.Property(e => e.CantidadConductores).HasColumnName("cantidad_conductores");
            entity.Property(e => e.Comentarios)
                .IsUnicode(false)
                .HasColumnName("comentarios");
            entity.Property(e => e.Direccion)
                .IsUnicode(false)
                .HasColumnName("direccion");
            entity.Property(e => e.Email)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.FechaDevolucion)
                .HasColumnType("date")
                .HasColumnName("fecha_devolucion");
            entity.Property(e => e.FechaEntrega)
                .HasColumnType("date")
                .HasColumnName("fecha_entrega");
            entity.Property(e => e.FechaNacimiento)
                .HasColumnType("date")
                .HasColumnName("fecha_nacimiento");
            entity.Property(e => e.FotoCedulaSrc)
                .IsUnicode(false)
                .HasColumnName("foto_cedula_src");
            entity.Property(e => e.Gps).HasColumnName("gps");
            entity.Property(e => e.LicenciaConducirSrc)
                .IsUnicode(false)
                .HasColumnName("licencia_conducir_src");
            entity.Property(e => e.MetodoPago).HasColumnName("metodo_pago");
            entity.Property(e => e.MillasIlimitadas).HasColumnName("millas_ilimitadas");
            entity.Property(e => e.Nacionalidad).HasColumnName("nacionalidad");
            entity.Property(e => e.Nombres)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("nombres");
            entity.Property(e => e.NumeroTelefeno)
                .HasMaxLength(13)
                .IsUnicode(false)
                .HasColumnName("numero_telefeno");
            entity.Property(e => e.PasoRapidoPeaje).HasColumnName("paso_rapido_peaje");
            entity.Property(e => e.Provincia).HasColumnName("provincia");
            entity.Property(e => e.Sector)
                .IsUnicode(false)
                .HasColumnName("sector");
            entity.Property(e => e.TipoPersona).HasColumnName("tipo_persona");
            entity.Property(e => e.Vehiculo).HasColumnName("vehiculo");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
