using Cursos.Domain.Configurations;
using Cursos.Domain.Users.Dtos;
using Cursos.Domain.Users.Entities;
using Cursos.Domain.Users.Repositories;
using Cursos.Domain.Users.Views;

namespace Cursos.Application.Users
{
    public class AplicUser : IAplicUser
    {
        private readonly IUserRepository _userRepository;
        private readonly IAuthenticationService _authenticationService;

        public AplicUser(IUserRepository userRepository,
                         IAuthenticationService authenticationService)
        {
            _userRepository = userRepository;
            _authenticationService = authenticationService;
        }

        public User Insert(UserInsertDto dto)
        {
            User user = new()
            {
                Login = dto.Login,
                Email = dto.Email,
                Senha = dto.Senha,
            };

            _userRepository.Insert(user);
            _userRepository.Persist();

            return user;
        }

        public UserLogin Login(UserLoginDto dto)
        {
            User user = _userRepository.GetByLogin(dto.Login);

            UserViewModel view = new()
            {
                Id = user.Id,
                Login = dto.Login,
                Email = user.Email
            };

            var token = _authenticationService.GenerateToken(view);

            UserLogin userLogin = new()
            {
                Token = token,
                User = view
            };

            return userLogin;
        }
    }
}