using Cursos.Repository.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Cursos.Repository.Configuration
{
    public class DbFactoryDbContext : IDesignTimeDbContextFactory<CourseDbContext>
    {
        public CourseDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<CourseDbContext>();
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-KRVH88J;Database=CURSO;user=sa;password=123;Trusted_Connection=True",
            options => options.EnableRetryOnFailure());
            CourseDbContext dbContext = new(optionsBuilder.Options);
            return dbContext;
        }
    }
}