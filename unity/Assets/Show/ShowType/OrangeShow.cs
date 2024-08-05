using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace FiveButtons
{
    public class OrangeShow : Show
    {
        private const float SPEED = 0.01f;
        private const float SPEED_Y = SPEED * 1.8f;
        private const float RADIUS = 1.0f;
        private const float OFFSET_Y = 0.5f;
        private const float Y = 1.8f;
        
        protected override Color GetColor() => new Color(1.0f, 0.392f, 0.0f);

        protected override void Anim()
        {
            var t = _time * SPEED;
            var ty = _time * SPEED_Y;
            
            var x0 = Mathf.Cos(t) * RADIUS;
            var z0 = Mathf.Sin(t) * RADIUS;
            var y0 = Y + Mathf.Sin(ty) * OFFSET_Y;
            _balls[0].transform.localPosition = new Vector3(x0, y0, z0);

            var x1 = Mathf.Cos(t + Mathf.PI) * RADIUS;
            var z1 = Mathf.Sin(t + Mathf.PI) * RADIUS;
            var y1 = Y + Mathf.Sin(ty + Mathf.PI) * OFFSET_Y;
            _balls[1].transform.localPosition = new Vector3(x1, y1, z1);
        }
    }
}
