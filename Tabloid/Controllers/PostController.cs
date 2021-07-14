using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Tabloid.Models;
using Tabloid.Repositories;


namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;

        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

    // GET: api/<PostController>
    [HttpGet]
    public IActionResult Get()
        {
            return Ok(_postRepository.GetAll());
        }

        private UserProfile GetCurrentUserProfile()
    {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _postRepository.GetByFirebaseUserId(firebaseUserId);
    }
    
        [HttpGet("MyPosts")]
        IActionResult GetCurrentUserPosts()
        {
            UserProfile CurrentUser = GetCurrentUserProfile();
            int CurrentUserId = CurrentUser.Id;
            return Ok(_postRepository.GetCurrentUserPosts(CurrentUserId));
        }
    }
}
