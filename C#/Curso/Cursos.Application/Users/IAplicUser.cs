using Cursos.Domain.Users.Dtos;
using Cursos.Domain.Users.Entities;
using Cursos.Domain.Users.Views;

namespace Cursos.Application.Users
{
    public interface IAplicUser
    {
        UserLogin Login(UserLoginDto dto);
        User Insert(UserInsertDto dto);
    }
}