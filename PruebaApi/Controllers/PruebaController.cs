using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

namespace PruebaApi.Controllers
{
    [EnableCors(origins: "http://127.0.0.1:5500", headers: "*", methods: "*")]
    [Route("api/[controller]")]
    [ApiController]
    public class PruebaController : ControllerBase
    {
        private string _connection = @"Server=wcwimj6zu5aaddlj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;Database=kgnwk10g7wazw95q ; uid=f27y2j9w0cjaoqd6; pwd=eenjisqyq162697n;";

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Models.Prueba> lst = null;
            using (var db = new MySqlConnection(_connection))
            {
                var sql = "select * from users";
                lst = db.Query<Models.Prueba>(sql);

            }

            return Ok(lst);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {

            IEnumerable<Models.Prueba> lst = null;
            using (var db = new MySqlConnection(_connection))
            {
                var sql = "select * from users where id=" + id;
                lst = db.Query<Models.Prueba>(sql);
                if (lst != null)
                {
                    return Ok(lst);
                }
                else
                {
                    return NotFound();
                }
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            int result = 0;
            using (var db = new MySqlConnection(_connection))
            {
                var sql = "delete from users where id=" + id;
                result = db.Execute(sql);

            }

            return Ok(result);
        }

        [HttpPost]
        public IActionResult Insert(Models.Prueba model)
        {
            int result = 0;
            using (var db = new MySqlConnection(_connection))
            {
                var sql = "insert into users (name,password,email,apellido,nrotelefono)" +
                    " values(@name,@password,@email,@apellido,@nrotelefono)";

                result = db.Execute(sql, model);
            }

            return Ok(result);
        }
    }
}