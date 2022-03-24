using Cursos.Domain.Courses.Entities;
using Cursos.Domain.Users.Entities;
using Cursos.Repository.Configuration.Courses;
using Cursos.Repository.Configuration.Users;
using Microsoft.EntityFrameworkCore;

namespace Cursos.Repository.Data
{
    public class CourseDbContext : DbContext
    {
        public CourseDbContext(DbContextOptions<CourseDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CourseConfig());
            modelBuilder.ApplyConfiguration(new UserConfig());
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<User> User { get; set; }
        public DbSet<Course> Course { get; set; }
    }
}