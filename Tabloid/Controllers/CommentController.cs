using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;
        public CommentController(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }
        // GET: api/CommentController
        [HttpGet("{postId}")]
        public IActionResult Get(int postId)
        {
            return Ok(_commentRepository.GetCommentsByPost(postId));
        }

        // POST api/CommentController
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/CommentController/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/CommentController/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}