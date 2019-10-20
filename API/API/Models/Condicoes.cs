using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class Condicoes
    {
        public int Id { get; set; }
        private float temp { get; set; }
        private String date { get; set; }
        private String time { get; set; }
        private String condition_code { get; set; }
        private String description { get; set; }
        private String currently { get; set; }
        private String cid { get; set; }
        private String city { get; set; }
        private String img_id { get; set; }
        private float humidity { get; set; }
        private String wind_speedy { get; set; }
        private String sunrise { get; set; }
        private String sunset { get; set; }
        private String condition_slug { get; set; }
        private String city_name { get; set; }
}
}