using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace FiveButtons
{
    public class Ball : MonoBehaviour
    {
        [SerializeField] private MeshRenderer _renderer;

        private const float INTENSITY = 0.5f;
        
        public void SetColor(Color color)
        {
            _renderer.material.color = Color.Lerp(Color.black, color, INTENSITY);
        }
    }
}
