using Cursos.Domain.Courses.Dtos;
using Cursos.Domain.Courses.Entities;
using Cursos.Domain.Courses.Views;

namespace Cursos.Application.Courses
{
    public interface IAplicCourse
    {
        Course Insert(CourseDto dto, int codigoUsuario);
        IList<CourseViewModel> GetAll();
        IList<CourseViewModel> GetByLogin(int codigoUsuario);
    }
}