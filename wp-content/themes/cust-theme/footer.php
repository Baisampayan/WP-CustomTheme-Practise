</div>
        <footer id="footer" role="contentinfo ">
            <?php
            get_template_part( 'template-parts/footer/footer-widgets' );
            get_template_part( 'template-parts/footer/copyright-footer' );
            ?>
        </footer>
        
        <?php
        // Getting the admin-bar in the frontend while logged-in
        wp_footer( );
        ?>

    </body>
</html>