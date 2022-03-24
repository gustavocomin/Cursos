using Cursos.Domain.Users.Entities;

namespace Cursos.Domain.Users.Repositories
{
    public interface IUserRepository
    {
        void Insert(User user);
        void Persist();
        User GetByLogin(string login);
    }
}