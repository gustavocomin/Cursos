using Cursos.Domain.Validations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Cursos.Domain.Filters
{
    public class CustomizeValidationModelState : ActionFilterAttribute
    {
        public override void OnActionExecuted(ActionExecutedContext context)
        {
            if (!context.ModelState.IsValid)
            {
                var validaCamposViewModel = new FieldsValidationViewModel(context.ModelState.SelectMany(x => x.Value.Errors).Select(x => x.ErrorMessage));
                context.Result = new BadRequestObjectResult(validaCamposViewModel);
            }
        }
    }
}