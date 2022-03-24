using Cursos.Domain.Courses.Entities;

namespace Cursos.Domain.Courses.Repositories
{
    public interface ICourseRepository
    {
        void Insert(Course Course);
        void Persist();
        IList<Course> GetAll();
        IList<Course> GetByUser(int codigoUsuario);
    }
}