using System.ComponentModel.DataAnnotations;

namespace Curso.Api.Models.Usuarios
{
    public class RegisterViewModelInput
    {
        [Required(ErrorMessage = "Login é obirgatório")]
        public string Login { get; set; }
        [Required(ErrorMessage = "Email é obirgatório")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Senha é obirgatória")]
        public string Senha { get; set; }
    }
}