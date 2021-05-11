using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PruebaApi.Models
{
    public class Prueba
    {

        public long id { get; set; }
        public string name { get; set; }
        public string password { get; set; }
        public string apellido { get; set; }
        public int nrotelefono { get; set; }
        public string email { get; set; }

    }
}
