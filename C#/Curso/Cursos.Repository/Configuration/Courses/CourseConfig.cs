using Cursos.Domain.Courses.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cursos.Repository.Configuration.Courses
{
    public class CourseConfig : IEntityTypeConfiguration<Course>
    {
        public void Configure(EntityTypeBuilder<Course> builder)
        {
            builder.ToTable("CURSO");

            builder.HasKey(p => p.Codigo);

            builder.Property(p => p.Codigo)
                   .ValueGeneratedOnAdd();

            builder.Property(p => p.Descricao);

            builder.Property(p => p.Nome);

            builder.HasOne(c => c.User)
                   .WithMany()
                   .HasForeignKey(c => c.CodigoUsuario);
        }
    }
}