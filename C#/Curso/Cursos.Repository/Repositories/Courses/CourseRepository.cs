using Cursos.Domain.Courses.Entities;
using Cursos.Domain.Courses.Repositories;
using Cursos.Repository.Data;
using Microsoft.EntityFrameworkCore;

namespace Cursos.Repository.Repositories.Courses
{
    public class CourseRepository : ICourseRepository
    {
        private readonly CourseDbContext _dbContext;

        public CourseRepository(CourseDbContext context)
        {
            _dbContext = context;
        }

        public void Insert(Course Course)
        {
            var pendentMigrations = _dbContext.Database.GetPendingMigrations();
            if (pendentMigrations.Any())
                _dbContext.Database.Migrate();

            _dbContext.Course.Add(Course);
        }

        public void Persist()
        {
            _dbContext.SaveChanges();
        }

        public IList<Course> GetAll()
        {
            IList<Course> Courses = _dbContext.Course.Include(x => x.User).ToList();
            return Courses;
        }

        public IList<Course> GetByUser(int userCode)
        {
            IList<Course> Courses = _dbContext.Course.Include(x => x.User).Where(x => x.CodigoUsuario == userCode).ToList();
            return Courses;
        }
    }
}