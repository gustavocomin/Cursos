namespace Cursos.Domain.Validations
{
    public class FieldsValidationViewModel
    {
        public IEnumerable<string> Errors { get; private set; }

        public FieldsValidationViewModel(IEnumerable<string> errors)
        {
            Errors = errors;
        }
    }
}