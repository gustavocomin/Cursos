using Microsoft.AspNetCore.Mvc;

namespace Curso.Api.Models.Usuarios
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginViewModelInput
    {
        public string Login { get; set; }
        public string Senha { get; set; }
    }
}