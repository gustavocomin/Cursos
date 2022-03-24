using Cursos.Application.Users;
using Cursos.Domain.Errors;
using Cursos.Domain.Filters;
using Cursos.Domain.Users.Dtos;
using Cursos.Domain.Users.Entities;
using Cursos.Domain.Users.Views;
using Cursos.Domain.Validations;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace Cursos.Api.Controllers.Users
{
    /// <summary>
    /// Controller responsável pelo cadastro e autenticação de usuários
    /// </summary>
    [Route("api/v1/Users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        #region Ctor
        private readonly IAplicUser _aplicUser;
        public UserController(IAplicUser aplicUser)
        {
            _aplicUser = aplicUser;
        }
        #endregion

        #region Login
        /// <summary>
        /// Este serviço permite autenticar um usuário cadastros e ativo.
        /// </summary>
        /// <param name="dto"></param>
        /// <returns>Retorna status ok, dados do usuario e o token em caso de sucesso</returns>
        [SwaggerResponse(statusCode: 200, description: "Sucesso ao autenticar", Type = typeof(UserLoginDto))]
        [SwaggerResponse(statusCode: 400, description: "Campos Obrigatórios", Type = typeof(FieldsValidationViewModel))]
        [SwaggerResponse(statusCode: 500, description: "Erro interno", Type = typeof(GenericErrorViewModel))]
        [HttpPost]
        [Route("Login")]
        [CustomizeValidationModelState]
        public IActionResult Login(UserLoginDto dto)
        {
            UserLogin userLogin = _aplicUser.Login(dto);

            return Ok(userLogin);
        }
        #endregion

        #region Insert
        /// <summary>
        /// Este serviço permite cadatrar um usuário.
        /// </summary>
        [SwaggerResponse(statusCode: 200, description: "Sucesso ao autenticar", Type = typeof(UserInsertDto))]
        [SwaggerResponse(statusCode: 400, description: "Campos Obrigatórios", Type = typeof(CustomizeValidationModelState))]
        [SwaggerResponse(statusCode: 500, description: "Erro interno", Type = typeof(GenericErrorViewModel))]
        [HttpPost]
        [Route("Insert")]
        [CustomizeValidationModelState]
        public IActionResult Insert(UserInsertDto dto)
        {
            User user = _aplicUser.Insert(dto);

            return Created("", user);
        }
        #endregion
    }
}