using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using API.Models;

namespace API.Controllers
{
    public class PostController : ApiController
    {

        // POST api/values

        public HttpResponseMessage PostUsuario(Condicoes condicoes)
        {
            try
            {
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, condicoes);
                response.Headers.Location = new Uri(Url.Link("NoWaste", new { Id = condicoes.Id  }));
                return response;
            }catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }
    }
}
