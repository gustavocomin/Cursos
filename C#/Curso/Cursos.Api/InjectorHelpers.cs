using Cursos.Domain.Users.Repositories;
using Cursos.Repository.Repositories.Users;
using Microsoft.Extensions.DependencyInjection;

namespace Cursos.Api
{
    internal static class InjectorHelpers
    {
        public static void Register(this IServiceCollection services)
        {
            services.AddTransient<IUserRepository, UserRepository>();
        }
    }
}