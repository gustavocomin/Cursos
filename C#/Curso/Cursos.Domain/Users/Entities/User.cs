﻿namespace Cursos.Domain.Users.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}