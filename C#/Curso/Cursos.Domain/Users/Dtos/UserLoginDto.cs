﻿using System.ComponentModel.DataAnnotations;

namespace Cursos.Domain.Users.Dtos
{
    public class UserLoginDto
    {
        [Required(ErrorMessage = "O Login é obrigatório")]
        public string Login { get; set; }
        [Required(ErrorMessage = "A Senha é obrigatória")]
        public string Senha { get; set; }
    }
}