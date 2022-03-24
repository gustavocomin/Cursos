using Cursos.Domain.Users.Entities;
using Cursos.Domain.Users.Repositories;
using Cursos.Repository.Data;

namespace Cursos.Repository.Repositories.Users
{
    public class UserRepository : IUserRepository
    {
        private readonly CourseDbContext _dbContext;

        public UserRepository(CourseDbContext context)
        {
            _dbContext = context;
        }

        public void Insert(User user)
        {
            _dbContext.User.Add(user);
        }

        public void Persist()
        {
            _dbContext.SaveChanges();
        }

        public User GetByLogin(string login)
        {
            User user = _dbContext.User.Where(x => x.Login == login).FirstOrDefault();
            return user;
        }
    }
}