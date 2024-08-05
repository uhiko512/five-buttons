using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace FiveButtons
{
    public class GreenShow : Show
    {
        private const float SPEED = 0.01f;
        private const float PING_PONG_SPEED = SPEED * 0.5f;
        private const float RADIUS = 1.0f;
        private const float Y = 1.8f;
        
        protected override Color GetColor() => new Color(0.12f, 1.0f, 0.0f);

        protected override void Anim()
        {
            for (var i = 0; i < _balls.Length; i++)
            {
                _balls[i].transform.localPosition = CalcPos(i);
            }
        }

        private Vector3 CalcPos(int i)
        {
            var pingPong = (Mathf.Sin(_time * PING_PONG_SPEED) * 0.5f + 0.5f) * Mathf.PI * 4.0f;
            var angleOffset = 2 * Mathf.PI * (i / (float) _balls.Length);
            var t = pingPong + angleOffset;
            
            var x = Mathf.Cos(t) * RADIUS;
            var z = Mathf.Sin(t) * RADIUS;
            var pos = new Vector3(x, Y, z);
            
            return pos;
        }
    }
}
