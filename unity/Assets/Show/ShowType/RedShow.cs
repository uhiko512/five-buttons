using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace FiveButtons
{
    public class RedShow : Show
    {
        private const float SPEED = 0.01f;
        private const float RADIUS = 1.0f;
        
        protected override Color GetColor() => new Color(0.88f, 0.0f, 0.0f);

        protected override void Anim()
        {
            var t = _time * SPEED;
            
            var x = Mathf.Cos(t) * RADIUS;
            var z = Mathf.Sin(t) * RADIUS;
            _balls[0].transform.localPosition = new Vector3(x, 1.8f, z);
        }
    }
}