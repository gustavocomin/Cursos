using System.ComponentModel.DataAnnotations;

namespace Cursos.Domain.Users.Dtos
{
    public class UserInsertDto
    {
        [Required(ErrorMessage = "Login é obirgatório")]
        public string Login { get; set; }
        [Required(ErrorMessage = "Email é obirgatório")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Senha é obirgatória")]
        public string Senha { get; set; }
    }
}