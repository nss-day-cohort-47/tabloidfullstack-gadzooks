using Microsoft.AspNetCore.Authorization;
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
        private readonly IUserProfileRepository _userProfileRepository;

        public PostController(IPostRepository postRepository, IUserProfileRepository userProfileRepository)
        {
            _postRepository = postRepository;
            _userProfileRepository = userProfileRepository;
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

        private string GetCurrentFirebaseUserProfileId()
        {
            string Id = User.FindFirstValue(ClaimTypes.NameIdentifier);
            return Id;
        }

        //GET: api/post/myposts
        //[Authorize]
        [HttpGet("MyPosts")]
        public IActionResult GetCurrentUserPosts()
        {
            UserProfile CurrentUser = GetCurrentUserProfile();
            string FirebaseUserId = CurrentUser.FirebaseUserId;
            return Ok(_postRepository.GetCurrentUserPosts(FirebaseUserId));
        }
    }
}
