using Cursos.Domain.Users.Views;

namespace Cursos.Domain.Configurations
{
    public interface IAuthenticationService
    {
        string GenerateToken(UserViewModel userViewModel);
    }
}