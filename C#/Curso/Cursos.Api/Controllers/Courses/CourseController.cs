using Cursos.Application.Courses;
using Cursos.Domain.Courses.Dtos;
using Cursos.Domain.Courses.Views;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Cursos.Api.Controllers.Courses
{
    [Route("api/v1/Courses")]
    [ApiController]
    [Authorize]
    public class CourseController : ControllerBase
    {
        #region Ctor
        private readonly IAplicCourse _aplicCourse;

        public CourseController(IAplicCourse aplicCourse)
        {
            _aplicCourse = aplicCourse;
        }
        #endregion

        /// <summary>
        /// Este serviço permite cadastrar um curso para um usuário autenticado.
        /// </summary>
        /// <returns>Retorna status 201 e dados do curso do usuário</returns>
        [SwaggerResponse(statusCode: 201, description: "Sucesso ao autenticar")]
        [SwaggerResponse(statusCode: 401, description: "Campos Obrigatórios")]
        [HttpPost]
        [Route("")]
        public async Task<IActionResult> Post(CourseDto dto)
        {
            var codigoUsuario = int.Parse(User.FindFirst(x => x.Type == ClaimTypes.NameIdentifier)?.Value);

            var curso = _aplicCourse.Insert(dto, codigoUsuario);

            return Created("", curso);
        }

        /// <summary>
        /// Este serviço permite obter todos os cursos ativod de um usuário.
        /// </summary>
        /// <returns>Retorna status ok e dados do curso do usuário</returns>
        [SwaggerResponse(statusCode: 201, description: "Sucesso ao obter os cursos", Type = typeof(CourseViewModel))]
        [SwaggerResponse(statusCode: 401, description: "Campos Obrigatórios")]
        [HttpGet]
        [Route("")]
        public async Task<IActionResult> Get()
        {
            var codigoUsuario = int.Parse(User.FindFirst(x => x.Type == ClaimTypes.NameIdentifier)?.Value);

            if (codigoUsuario == 0)
                return BadRequest("Não foi possível encontrar nenhum curso vinculado a este usuário");

            var cursos = _aplicCourse.GetByLogin(codigoUsuario);

            return Ok(cursos);
        }
    }
}