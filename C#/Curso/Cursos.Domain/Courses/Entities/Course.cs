using Cursos.Domain.Users.Entities;

namespace Cursos.Domain.Courses.Entities
{
    public class Course
    {
        public int Codigo { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public int CodigoUsuario { get; set; }
        public virtual User User { get; set; }
    }
}