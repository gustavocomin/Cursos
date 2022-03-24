using Cursos.Domain.Courses.Dtos;
using Cursos.Domain.Courses.Entities;
using Cursos.Domain.Courses.Repositories;
using Cursos.Domain.Courses.Views;

namespace Cursos.Application.Courses
{
    public class AplicCourse : IAplicCourse
    {
        private readonly ICourseRepository _CourseRepository;

        public AplicCourse(ICourseRepository CourseRepository)
        {
            _CourseRepository = CourseRepository;
        }

        public IList<CourseViewModel> GetAll()
        {
            IList<CourseViewModel> Courses = _CourseRepository.GetAll().Select(x => new CourseViewModel()
            {
                Nome = x.Nome,
                Descricao = x.Descricao,
                Login = x.User.Login
            }).ToList();

            return Courses;

        }

        public IList<CourseViewModel> GetByLogin(int codigoUsuario)
        {
            IList<CourseViewModel> Courses = _CourseRepository.GetByUser(codigoUsuario).Select(x => new CourseViewModel()
            {
                Nome = x.Nome,
                Descricao = x.Descricao,
                Login = x.User.Login
            }).ToList();

            return Courses;
        }

        public Course Insert(CourseDto dto, int codigoUsuario)
        {
            Course Course = new()
            {
                Descricao = dto.Descricao,
                Nome = dto.Nome,
                CodigoUsuario = codigoUsuario
            };

            _CourseRepository.Insert(Course);
            _CourseRepository.Persist();

            return Course;
        }
    }
}
