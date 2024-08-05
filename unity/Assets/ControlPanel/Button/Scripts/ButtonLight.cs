using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace FiveButtons
{
    public class ButtonLight : MonoBehaviour
    {
        [SerializeField] private MeshRenderer _renderer;

        private Color _color;

        public void SetColor(Color color)
        {
            _color = color;
            State(false);
        }

        public void State(bool enabled)
        {
            var intensity = enabled ? 1.0f : 0.3f;
            _renderer.material.color = Color.Lerp(Color.black, _color, intensity);
        }
    }
}
