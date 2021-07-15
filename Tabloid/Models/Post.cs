using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace Tabloid.Models
{
    public class Post
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }

        [DataType(DataType.Url)]
        public string ImageLocation { get; set; }
        public DateTime CreateDateTime { get; set; }
        public DateTime PublishDateTime { get; set; }
        public Boolean IsApproved { get; set; }
        public int CategoryId { get; set; }
        public int UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }
        public Category Category { get; set; }
    }
}
